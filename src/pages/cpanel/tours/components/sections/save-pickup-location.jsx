import React, { useContext, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import ProductContext from "../../ProductContext";
import {  useForm } from "react-hook-form";
import { postRequest } from "../../../../../service";

export default function SavePickupLocation({
  handleNewPickupLocation,
  hideForm
}) {
  const { product,dispatch, hideLoader, showLoader, success, danger  } = useContext(ProductContext);
  const [loading,setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleLocation = (place) => {
    if (place.geometry) {
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();  
      setValue("latitude", latitude);
      setValue("longitude", longitude);
      setValue("address", place.formatted_address);
    } else {
      console.error("Place has no geometry!");
    }
  };

  const onSubmit = (data) => {
    if (watch('latitude') == undefined || watch('longitude') == undefined || watch('address') == '' || watch('title') == '') {
      return;
    } else {
      dispatch(showLoader());
      postRequest(`v1/vendor/${product?.vendor_id}/pickup-location/store`,data)
        .then((res) => {
          if (res.success) {
            dispatch(success('Pickup Location saved successfully.')); 
            handleNewPickupLocation(res.data);
            reset();
          }
        })
        .catch(() =>  dispatch(danger('Not saved')))
        .finally(() => {
          dispatch(hideLoader());
        });
    }
    
  };

   

  return (
    <>

    <Card> 
    <Card.Header>Pickup Location </Card.Header> 
      <Card.Body> 
        <Form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Enter Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                autoComplete="on"
                {...register("title", {
                  required: "Location Title is required",
                })}
              />
              {errors.title && (
                <p className="text-danger text-right">{errors.title.message}</p>
              )}
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Search Location</Form.Label> 
              <ReactGoogleAutocomplete
                className="form-control"
                {...register("address", {
                  required: "Location is required",
                })}
                options={{
                  types: ['address'], // Enables house numbers and street addresses
                  //componentRestrictions: { country: 'us' } // Restrict search to a specific country if needed
                }}
                placeholder="Search for an address (house number, street, etc.)" 
                onPlaceSelected={handleLocation}
              />
              {errors.address && (
                <p className="text-danger">{errors.address.message}</p>
              )}
            </Form.Group>
          </Col> 
          <Button type="submit" className="btn btn-primary">
            Save Pickup Location
          </Button> 
        </Row>
      </Form> 
      </Card.Body>
    </Card>
    
    </>
  );
}
