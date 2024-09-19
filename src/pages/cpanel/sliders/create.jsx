import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getRequest, postRequest } from '../../../service';
import UploadFile from '../../../components/upload-file';
 
const CreateSlider = () => { 
    const [loading, setLoading] = useState(false);

    const { register, reset, setValue, handleSubmit, watch, formState: { errors } } = useForm();

    const [error, setErrorMessage] = useState({
        has: false,
        type: 'warning',
        message: ''
    });
    
    const onSubmit = (data) => { 
        setLoading(true);
        postRequest(`v1/slider/store`, data)
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
                        <div className="card card-rounded">
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
                                        {errors.title && <p className='text-danger text-right'>{errors.title.message}</p>}
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
                                        {errors.action_link && <p className='text-danger text-right'>{errors.action_link.message}</p>}
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
                                        {errors.action_title && <p className='text-danger text-right'>{errors.action_title.message}</p>}
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
                                        {errors.description && <p className='text-danger text-right'>{errors.description.message}</p>}
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
                                        {errors.image && <p className='text-danger text-right'>{errors.image.message}</p>}
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

export default CreateSlider;
