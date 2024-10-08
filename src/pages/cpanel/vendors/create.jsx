import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getRequest, postRequest } from '../../../service';
import UploadFile from '@components/upload-file';
const CreateVendor = () => {
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [loading, setLoading] = useState(false);

    const { register, reset, setValue, handleSubmit, watch, formState: { errors } } = useForm();

    const [error, setErrorMessage] = useState({
        has: false,
        type: 'warning',
        message: ''
    });

    useEffect(() => {
        getCountry();
    }, []);

    console.log(loading, error);

    const getCountry = () => {
        getRequest('v1/countries?skip=0&limit=1000')
            .then((res) => {
                setCountry(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getState = () => {
        getRequest(`v1/states?skip=0&limit=1000&country_id=${watch('country')}`)
            .then((res) => {
                setState(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getCity = () => {
        getRequest(`v1/cities?skip=0&limit=1000&state_id=${watch('state')}`)
            .then((res) => {
                setCity(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onSubmit = (data) => {
        console.log(data);
        setLoading(true);
        postRequest(`v1/vendor/store`, data)
            .then((res) => {
                if (res.success) {
                    alert("Vendor created successfully");
                    reset();
                    window.location.href = '/cpanel/vendor/listing';
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
        console.log(name);
        setValue(name, url);
    };

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Business Info</h4>

                                <div className="form-group row">
                                    <label htmlFor="name" className="col-sm-3 control-label col-form-label"><span>Business Name</span></label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Business Name Here"
                                            autoComplete="on"
                                            {...register('name', {
                                                required: 'Name is required'
                                            })}
                                        />
                                        {errors.name && <p className='text-danger text-right'>{errors.name.message}</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-3 control-label col-form-label"><span>Business Email</span></label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="Business Email Here"
                                            autoComplete="on"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'Invalid email address'
                                                }
                                            })}
                                        />
                                        {errors.email && <p className='text-danger text-right'>{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="phoneno" className="col-sm-3 control-label col-form-label"><span>Phone Number</span></label>
                                    <div className="col-sm-9">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="phoneno"
                                            placeholder="Phone Number Here"
                                            autoComplete="on"
                                            {...register('phoneno', {
                                                required: 'Phone Number is required'
                                            })}
                                        />
                                        {errors.phoneno && <p className='text-danger text-right'>{errors.phoneno.message}</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="intro" className="col-sm-3 control-label col-form-label"><span>Business Intro</span></label>
                                    <div className="col-sm-9">
                                        <textarea
                                            id="intro"
                                            className="form-control"
                                            placeholder="Business Intro Here"
                                            rows={4}
                                            autoComplete="on"
                                            {...register('intro', {
                                                required: 'Business Intro is required'
                                            })}
                                        />
                                        {errors.intro && <p className='text-danger text-right'>{errors.intro.message}</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="banner" className="col-sm-3 control-label col-form-label"><span>Banner</span></label>
                                    <div className="col-sm-9">
                                        <UploadFile
                                            onUpload={handleImageUpload}
                                            name={"banner"}
                                            path={"vendors/"} 
                                            type={"category"}
                                            val={watch("banner")}
                                        />
                                        <input 
                                            type="hidden" 
                                            {...register('banner', { required: "This field is required" })}
                                        /> 
                                        {errors.banner && <p className='text-danger text-right'>{errors.banner.message}</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="logo" className="col-sm-3 control-label col-form-label"><span>Logo</span></label>
                                    <div className="col-sm-9">
                                        <UploadFile 
                                            onUpload={handleImageUpload}
                                            name={"logo"}
                                            path={"vendors/"} 
                                            type={"category"}
                                            val={watch("logo")}
                                        />
                                        <input 
                                            type="hidden" 
                                            {...register('logo', { required: "This field is required" })}
                                        /> 
                                        {errors.logo && <p className='text-danger text-right'>{errors.logo.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Location Info</h4>

                                <div className="form-group row">
                                    <label htmlFor="country" className="col-sm-3 control-label col-form-label"><span>Select Country</span></label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-control"
                                            id="country"
                                            {...register('country', {
                                                required: 'Country is required'
                                            })}
                                            onChange={(e) => {
                                                setValue('country', parseInt(e.target.value, 10));
                                                getState();
                                            }}
                                        >
                                            <option value="">Select Country</option>
                                            {country.map((c) => (
                                                <option key={c.id} value={c.id}>{c.name}</option>
                                            ))}
                                        </select>
                                        {errors.country && <p className='text-danger text-right'>{errors.country.message}</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="state" className="col-sm-3 control-label col-form-label"><span>Select State</span></label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-control"
                                            id="state"
                                            {...register('state', {
                                                required: 'State is required'
                                            })}
                                            onChange={(e) => {
                                                setValue('state', parseInt(e.target.value, 10));
                                                getCity();
                                            }}
                                        >
                                            <option value="">Select State</option>
                                            {state.map((s) => (
                                                <option key={s.id} value={s.id}>{s.name}</option>
                                            ))}
                                        </select>
                                        {errors.state && <p className='text-danger text-right'>{errors.state.message}</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="city" className="col-sm-3 control-label col-form-label"><span>Select City</span></label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-control"
                                            id="city"
                                            {...register('city', {
                                                required: 'City is required'
                                            })}
                                        >
                                            <option value="">Select City</option>
                                            {city.map((c) => (
                                                <option key={c.id} value={c.id}>{c.name}</option>
                                            ))}
                                        </select>
                                        {errors.city && <p className='text-danger text-right'>{errors.city.message}</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="address" className="col-sm-3 control-label col-form-label"><span>Business Address</span></label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="Business Address Here"
                                            autoComplete="on"
                                            {...register('address', {
                                                required: 'Business Address is required'
                                            })}
                                        />
                                        {errors.address && <p className='text-danger text-right'>{errors.address.message}</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="latitude" className="col-sm-3 control-label col-form-label"><span>Latitude</span></label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="latitude"
                                            placeholder="Latitude Here"
                                            autoComplete="on"
                                            {...register('latitude', {
                                                required: 'Latitude is required'
                                            })}
                                        />
                                        {errors.latitude && <p className='text-danger text-right'>{errors.latitude.message}</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="longitude" className="col-sm-3 control-label col-form-label"><span>Longitude</span></label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="longitude"
                                            placeholder="Longitude Here"
                                            autoComplete="on"
                                            {...register('longitude', {
                                                required: 'Longitude is required'
                                            })}
                                        />
                                        {errors.longitude && <p className='text-danger text-right'>{errors.longitude.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-h-100">
                            <div className="card-body right-aside">
                                <h5 className="card-title">Other Details</h5>
                                <br />
                                <div className="form-group row">
                                    <h5>Category</h5>
                                    <div className="col-md-12">
                                        <div className="form-check mr-sm-2">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="customControlAutosizing1"
                                            />
                                            <label
                                                className="form-check-label mb-1"
                                                htmlFor="customControlAutosizing1"
                                            >
                                                First One
                                            </label>
                                        </div>
                                        <div className="form-check mr-sm-2">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="customControlAutosizing2"
                                            />
                                            <label
                                                className="form-check-label mb-1"
                                                htmlFor="customControlAutosizing2"
                                            >
                                                Second One
                                            </label>
                                        </div>
                                        <div className="form-check mr-sm-2">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="customControlAutosizing3"
                                            />
                                            <label
                                                className="form-check-label mb-1"
                                                htmlFor="customControlAutosizing3"
                                            >
                                                Third One
                                            </label>
                                        </div>
                                    </div>
                                </div>
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
            </form>
        </div>
    );
};

export default CreateVendor;
