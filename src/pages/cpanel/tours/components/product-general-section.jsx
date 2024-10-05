import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../ProductContext";
import { useForm } from "react-hook-form";
import { Accordion, Card, Col, Form, Row } from "react-bootstrap"; 
import LocationSection from "./sections/location-section"; 
import UploadFile from "../../../../components/upload-file";
import { postRequest } from "../../../../service";

const ProductGeneralSection = () => {
 
  const { product, dispatch, hideLoader, showLoader, success, danger} = useContext(ProductContext);  
  const [loading,setLoading] = useState([]);
 
  const {
    register, 
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { 
      price_type: "both",
      people_limit: 10,
    },
  });
 
  const priceType = watch("price_type");

  useEffect(() => {
    setValue("step",'general-data'); 
    setValue("is_bookable",product?.is_bookable);
    setValue("name", product?.name); 
    setValue("description", product?.description);
    setValue("short_description", product?.short_description);
    setValue("country", product?.country_id);
    setValue("state", product?.state_id);
    setValue("city", product?.city_id);
    setValue("address", product?.address);
    setValue("latitude", product?.latitude);
    setValue("longitude", product?.longitude);
    setValue("price_type", product?.price_type);
    setValue("children_price", product?.children_price);
    setValue("adult_price", product?.adult_price);
    setValue('thumbnail',product?.thumbnail);
  }, [product]);
 
  const handleImageUpload = (name, url) => {
    setValue(name, url); 
  };

  const onSubmit = (data) => { 
    dispatch(showLoader());
    postRequest(`v1/product/${product?.id}/update`, data)
    .then((res) => {
      if (res.success) {
        dispatch(success('General Information updated successfully.')); 
      }
    })
    .catch(() =>  dispatch(danger('Not saved')) )
    .finally(() => {
      dispatch(hideLoader());
    });
};  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
      <Card.Title className="h3">General Details</Card.Title> 
      <Accordion  defaultActiveKey={['0']} alwaysOpen className="silver-hawk"> 
        <Row>
          <Col md={8}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Basic </Accordion.Header>
                <Accordion.Body> 
                    <Form.Group className="mb-3">
                      <Form.Label>Enter Title</Form.Label>
                      <Form.Control
                      type="text"
                      placeholder="Title"
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
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Short Description</Form.Label>
                      <Form.Control
                      style={{ height: "150px" }}
                      id="short_description"
                      as="textarea"
                      aria-label="With textarea"
                      {...register("short_description", {
                          required: "Tour short description is required",
                      })}
                      />
                      {errors.short_description && (
                      <p className="text-danger text-right">
                          {errors.short_description.message}
                      </p>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        style={{ height: "200px" }}
                        id="description"
                        as="textarea"
                        aria-label="With textarea"
                        {...register("description", {
                            required: "Tour Description is required",
                        })}
                        />
                        {errors.description && (
                        <p className="text-danger text-right">
                            {errors.description.message}
                        </p>
                        )}
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                        Price
                        </Form.Label>
                        <Col sm={3}>
                        <Form.Check
                            type="radio"
                            label="Adults Only?"
                            value="adult"
                            id="adult_accepted"
                            {...register("price_type", {
                            required: "The field is required",
                            })}
                        />
                        </Col>
                        <Col sm={3}>
                        <Form.Check
                            type="radio"
                            label="Children Only?"
                            value="children"
                            id="children_accepted"
                            {...register("price_type", {
                            required: "The field is required",
                            })}
                        />
                        </Col>
                        <Col sm={3}>
                        <Form.Check
                            type="radio"
                            label="Both?"
                            value="both"
                            id="both_accepted"
                            {...register("price_type", {
                            required: "The field is required",
                            })}
                        />
                        </Col>
                    </Form.Group>

                    {product?.type != "tour" && (
                        <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                        Is it bookable?
                        </Form.Label>
                        <Col sm={3}>
                        <Form.Check
                            type="radio"
                            label="Yes, it can be booked directly"
                            value={1}
                            id="yes_bookable"
                            {...register("is_bookable", {
                            required: "The field is required",
                            })}
                        />
                        </Col>
                        <Col sm={3}>
                        <Form.Check
                            type="radio"
                            label="No, only available in a package"
                            value={0}
                            id="not_bookable"
                            {...register("is_bookable", {
                            required: "The field is required",
                            })}
                        />
                        </Col>
                        
                    </Form.Group>
                   )}
                   
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                        People Limit
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="100"
                            className="mb-3"
                            autoComplete="on"
                            {...register("people_limit", {
                            required: "People limit is required",
                            })}
                        />
                        {errors.people_limit && (
                            <p className="text-danger text-right">
                            {errors.people_limit.message}
                            </p>
                        )}
                        </Col>
                    </Form.Group>

                    {priceType !== "children" && (
                        <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            Price <small>Per Adult</small>
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                            type="number"
                            className="mb-3"
                            placeholder="Price"
                            {...register("adult_price", {
                                required:
                                priceType !== "children"
                                    ? "Adult price is required"
                                    : false,
                            })}
                            />
                            {errors.adult_price && (
                            <p className="text-danger text-right">
                                {errors.adult_price.message}
                            </p>
                            )}
                        </Col>
                        </Form.Group>
                    )}

                    {priceType !== "adult" && (
                        <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            Price <small>Per Child (Under 12 yrs)</small>
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                            type="number"
                            className="mb-3"
                            placeholder="Price"
                            {...register("children_price", {
                                required:
                                priceType !== "adult" ? "Price is required" : false,
                            })}
                            />
                            {errors.children_price && (
                            <p className="text-danger text-right">
                                {errors.children_price.message}
                            </p>
                            )}
                        </Col>
                        </Form.Group>
                    )}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Location</Accordion.Header>
              <Accordion.Body>
                <LocationSection register={register} errors={errors} watch={watch} setValue={setValue}/> 
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={4}> 
            <div className="form-group">                     
              <UploadFile
                onUpload={handleImageUpload}
                name={"thumbnail"}
                path={"tours/"}
                type={"product"}
                val={''}
              />
              <input
                type="hidden"
                {...register(`thumbnail`, {
                  required: "This field is required",
                })}
              />
              {errors.thumbnail && (
                <p className="text-danger text-right">
                  {errors.thumbnail.message}
                </p>
              )}
              {
                watch('thumbnail') && watch('thumbnail') !== '' && (
                  <div className="tour-banner mt-3">
                  <div className="remove-image"></div>
                  <img src={watch('thumbnail') ?? undefined} width={'100%'} alt="Gallery Image 0" />
                </div>
                )
              }
            </div>
          </Col>
        </Row>
      </Accordion>
      <div className="row right-aside-btns">
        <div className="col-md-12 d-flex justify-content-end gap-3"> 
          <button type="submit" className="btn btn-primary">
            Save General Information
          </button>
        </div>
      </div>
    </form>
  );
};
export default ProductGeneralSection;
