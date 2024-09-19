import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getRequest, postRequest } from '../../../service';
import UploadFile from '../../../components/upload-file';
import { useParams } from 'react-router-dom';
 
const EditSlider = () => { 
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [slider, setSlider] = useState([]);

    const { register, reset, setValue, handleSubmit, watch, formState: { errors } } = useForm();

    const [error, setErrorMessage] = useState({
        has: false,
        type: 'warning',
        message: ''
    });


    useEffect(() => {
        if (slider) {
          setValue("title", slider.title);
          setValue("description", slider.description);
          setValue("image", slider.image);
          setValue("status", slider.status);
          setValue("action_link", slider.action_link);
          setValue("action_title", slider.action_title); 
        }
      }, [setValue, slider]);

    const fetchVendorDetails = useCallback(() => {
        setLoading(true);
        getRequest(`v1/slider/${id}/details`)
            .then((res) => {
                const data = res.data;
                setSlider(data);
            })
            .catch((e) => {
                console.log(e);
                setError("Error fetching vendor details");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        fetchVendorDetails();
    }, [fetchVendorDetails]);
    
    const onSubmit = (data) => { 
        setLoading(true);
        postRequest(`v1/slider/${slider?.id}/update`, data)
            .then((res) => {
                if (res.success) {
                    alert("Slider created successfully");
                    reset();
                    window.location.href = '/cpanel/slider/listing';
                }
            })
            .catch(() => setErrorMessage({
                has: true,
                type: 'danger',
                message: "Error creating category"
            }))
            .finally(() => {
                setLoading(false);
            });
    };

    const handleImageUpload = (name, url) => { 
        setValue(name, url);
    };

    return (
        <div className="container-fluid">
   <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
      <div className="row">
         <div className="col-md-8">
            <h4 className="card-title">Slider</h4>
                  <div className='card card-rounded'>
                     <div className="card-body">
                        <div className="form-group row">
                           <label htmlFor="title" className="col-sm-3 control-label col-form-label"><span>Slider Title</span></label>
                           <div className="col-sm-9">
                              <input
                              type="text"
                              className="form-control"
                              id="title"
                              autoComplete="on"
                              {...register('title', {
                              required: 'Name is required'
                              })}
                              />
                              {errors.title && 
                              <p className='text-danger text-right'>{errors.title.message}</p>
                              }
                           </div>
                        </div>
                        <div className="form-group row">
                           <label htmlFor="action_link" className="col-sm-3 control-label col-form-label"><span>Action Link</span></label>
                           <div className="col-sm-9">
                              <input
                              type="text"
                              className="form-control"
                              id="action_link" 
                              {...register('action_link')}
                              />
                              {errors.action_link && 
                              <p className='text-danger text-right'>{errors.action_link.message}</p>
                              }
                           </div>
                        </div>
                        <div className="form-group row">
                           <label htmlFor="action_title" className="col-sm-3 control-label col-form-label"><span>Action Link</span></label>
                           <div className="col-sm-9">
                              <input
                              type="text"
                              className="form-control"
                              id="action_title" 
                              {...register('action_title')}
                              />
                              {errors.action_title && 
                              <p className='text-danger text-right'>{errors.action_title.message}</p>
                              }
                           </div>
                        </div>
                        <div className="form-group row">
                           <label htmlFor="description" className="col-sm-3 control-label col-form-label"><span>Description</span></label>
                           <div className="col-sm-9">
                              <textarea
                              id="description"
                              className="form-control" 
                              rows={4} 
                              {...register('description', {
                              required: 'Description is required'
                              })}
                              />
                              {errors.description && 
                              <p className='text-danger text-right'>{errors.description.message}</p>
                              }
                           </div>
                        </div>
                        <div className="form-group row">
                           <label htmlFor="image" className="col-sm-3 control-label col-form-label"><span>Banner</span></label>
                           <div className="col-sm-9 hide-label">
                              <UploadFile
                                 onUpload={handleImageUpload}
                                 name={"image"}
                                 path={"vendors/"} 
                                 type={"category"}
                                 val={watch("image")}
                                 />
                              <input 
                              type="hidden" 
                              {...register('image', { required: "This field is required" })}
                              /> 
                              {errors.image && 
                              <p className='text-danger text-right'>{errors.image.message}</p>
                              }
                           </div>
                        </div>
                        <div className="form-group row">
                           <label
                              htmlFor="Status"
                              className="col-sm-3 control-label col-form-label"
                              > <span>Status</span>
                           </label>
                           <div className="col-sm-9">
                              <div className="row">
                                 <div className="col-sm-4">
                                    <input
                                    type="radio"
                                    id="in-active"
                                    name="status"
                                    value={0}
                                    {...register("status", {
                                    required: "This field is required"
                                    })}
                                    checked={watch('status') == 0}
                                    />
                                    <label className="form-check-label ms-2" htmlFor="in-active">
                                    In-Active
                                    </label>
                                 </div>
                                 <div className="col-sm-4">
                                    <input
                                    type="radio"
                                    id="active"
                                    name="status"
                                    value={1}
                                    {...register("status", {
                                    required: "This field is required"
                                    })}
                                    checked={watch('status') == 1}
                                    />
                                    <label className="form-check-label ms-2" htmlFor="active">
                                    Active
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="row right-aside-btns">
         <div className="col-md-12 d-flex justify-content-end gap-3">
            <button type="reset" className="btn btn-secondary text-white">
            Reset
            </button>
            <button type="submit" className="btn btn-primary">
            Save Changes
            </button>
         </div>
      </div>

                     </div>
                  </div>
         </div>
      </div>
   </form>
</div>
    );
};

export default EditSlider; 