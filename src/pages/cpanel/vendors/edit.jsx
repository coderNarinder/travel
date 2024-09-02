import React, { useCallback, useContext, useEffect, useState } from "react";
import VendorContext from "./VendorContext";
import { useForm } from "react-hook-form";
import { getRequest, postRequest } from "../../../service";
import UploadFile from "../../../components/common/admin/components/formcontrols/UploadFile";

const VendorEdit = () => {
  const vendor = useContext(VendorContext);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [error, setErrorMessage] = useState({
    has: false,
    type: "warning",
    message: "",
  });

  useEffect(() => {
    getCountry();
    getCategories();
  }, []);

  const getCountry = () => {
    getRequest("v1/countries?skip=0&limit=1000")
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategories = () => {
    getRequest("v1/category/listing?skip=0&limit=50&tree=1&parent=0")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (vendor) {
      setValue("name", vendor.name);
      setValue("email", vendor.email);
      setValue("phone_number", vendor.phone_number);
      setValue("address", vendor.address);
      setValue("latitude", vendor.latitude);
      setValue("intro", vendor.description);
      setValue("longitude", vendor.longitude);
      setValue("logo", vendor.logo);
      setValue("banner", vendor.banner);
      setValue("logo", vendor.logo);
      setValue("country", vendor.country_id);
      setValue("state", vendor.state_id);
      setValue("city", vendor.city_id);
      setValue("status", parseInt(vendor.status));
      setValue("categories", vendor.categories);
    }
  }, [setValue, vendor]);

  const countryID = watch("country");
  const stateID = watch("state");

  const getState = useCallback(() => {
    if (countryID) {
      getRequest(`v1/states?skip=0&limit=1000&country_id=${countryID}`)
        .then((res) => {
          setState(res.data);
          setValue("state", vendor?.state_id ?? res.data[0]?.id); // Fallback if vendor data not available
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [countryID, setValue, vendor]);

  const getCity = useCallback(() => {
    if (stateID) {
      getRequest(`v1/cities?skip=0&limit=1000&state_id=${stateID}`)
        .then((res) => {
          setCity(res.data);
          setValue("city", vendor?.city_id ?? res.data[0]?.id); // Fallback if vendor data not available
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [setValue, stateID, vendor]);

  useEffect(() => {
    getState();
  }, [countryID, getState]);

  useEffect(() => {
    getCity();
  }, [stateID, getCity]);

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    postRequest(`v1/vendor/${vendor?.id}/update`, data)
      .then((res) => {
        if (res.success) {
          alert("Vendor updated successfully");
          reset();
          window.location.href = `/cpanel/vendor-detail/${vendor?.id}/info`;
        }
      })
      .catch(() =>
        setErrorMessage({
          has: true,
          type: "danger",
          message: "Error updating vendor",
        })
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleImageUpload = (name, url) => {
    console.log(name);
    setValue(name, url); // Type assertion removed
  };

  return (
    <div className="card custom-card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
          <div className="row">
            <div className="col-md-8">
              {/* Business Info Card */}
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Business Info</h4>

                  <div className="form-group row">
                    <label
                      htmlFor="name"
                      className="col-sm-3 control-label col-form-label"
                    >
                      <span>Business Name</span>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Business Name Here"
                        autoComplete="on"
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />
                      {errors.name && (
                        <p className="text-danger text-right">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Other fields go here... */}

                  <div className="form-group row">
                    <label
                      htmlFor="Logo"
                      className="col-sm-3 control-label col-form-label"
                    >
                      <span>Logo</span>
                    </label>
                    <div className="col-sm-9">
                      <UploadFile
                        onUpload={handleImageUpload}
                        name="logo"
                        path="vendors/"
                        type="category"
                        val={watch("logo")}
                      />
                      <input
                        type="hidden"
                        {...register("logo", {
                          required: "This field is required",
                        })}
                      />
                      {errors.logo && (
                        <p className="text-danger text-right">
                          {errors.logo.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      htmlFor="banner"
                      className="col-sm-3 control-label col-form-label"
                    >
                      <span>Banner</span>
                    </label>
                    <div className="col-sm-9">
                      <UploadFile
                        onUpload={handleImageUpload}
                        name="banner"
                        path="vendors/"
                        type="category"
                        val={watch("banner")}
                      />
                      <input
                        type="hidden"
                        {...register("banner", {
                          required: "This field is required",
                        })}
                      />
                      {errors.banner && (
                        <p className="text-danger text-right">
                          {errors.banner.message}
                        </p>
                      )}
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
                                    <label className="form-check-label" htmlFor="in-active">
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
                                    <label className="form-check-label" htmlFor="active">
                                        Active
                                    </label>
                                </div>
                                
                                <div className="col-sm-4">
                                    <input
                                    type="radio"
                                    id="Block"
                                    name="status"
                                    value={3}
                                    {...register("status", {
                                      required: "This field is required"
                                    })}
                                    checked={watch('status') == 3}
                                    />
                                    <label className="form-check-label" htmlFor="Block">
                                        Block
                                    </label>
                                </div>
                                <div className="col-sm-12"> 
                                    {errors.status && (
                                        <p className="text-danger text-right">
                                        {errors.status.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                       </div>
                  </div>

                  {/* Other fields go here... */}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {/* Categories Accordion */}
              <div className="card card-h-100">
                <div className="card-body right-aside">
                  <div className="accordion-item card">
                    <h2 className="accordion-header" id="category">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#categoryWrap"
                        aria-expanded="true"
                        aria-controls="categoryWrap"
                      >
                        Category
                      </button>
                    </h2>
                    <div
                      id="categoryWrap"
                      className="accordion-collapse collapse show"
                      aria-labelledby="category"
                    >
                      <div className="card-body">
                        {categories && categories.map((cate) => (
                          <>
                            <div className="form-check" key={cate.id}>
                              <input
                                type="checkbox"
                                {...register(`categories`, {
                                  required: "Category is required",
                                })}
                                className="form-check-input"
                                value={cate.id}
                                id={`customControlValidation-${cate.id}`}
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor={`customControlValidation-${cate.id}`}
                              >
                                {cate.name}
                              </label>
                              <br />
                              <div className="col-md-12">
                                {cate?.category &&
                                  cate?.category?.map((sub) => (
                                    <>
                                      <div
                                        className="form-check mt-2 mb-3"
                                        key={sub.id}
                                      >
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          id={`customControlValidation-${sub.id}`}
                                          {...register(`categories`, {
                                            required: "Category is required",
                                          })}
                                          value={sub.id}
                                        />
                                        <label
                                          className="form-check-label mb-0"
                                          htmlFor={`customControlValidation-${sub.id}`}
                                        >
                                          {sub.name}
                                        </label>
                                        {sub?.category &&
                                          sub?.category?.map((child) => (
                                            <>
                                              <div
                                                className="form-check mt-2 mb-3"
                                                key={child.id}
                                              >
                                                <input
                                                  type="checkbox"
                                                  id={`customControlValidation-${child.id}`}
                                                  {...register(`categories`, {
                                                    required:
                                                      "Category is required",
                                                  })}
                                                  className="form-check-input"
                                                  value={child.id}
                                                />
                                                <label
                                                  className="form-check-label mb-0"
                                                  htmlFor={`customControlValidation-${child.id}`}
                                                >
                                                  {child.name}
                                                </label>
                                              </div>
                                            </>
                                          ))}
                                      </div>
                                    </>
                                  ))}
                              </div>
                            </div>
                          </>
                        ))}

                        {errors.categories && (
                          <p className="text-danger text-right">
                            {errors.categories.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Other accordions go here... */}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 text-right">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorEdit;
