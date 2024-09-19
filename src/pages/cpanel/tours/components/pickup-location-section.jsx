import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Form,
  Modal,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import SavePickupLocation from "./sections/save-pickup-location";
import ProductContext from "../ProductContext";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { postRequest } from "../../../../service";

const PickupLocationSection = ({ pickup_addresses }) => {
  const { product, pickupLocations, dispatch, hideLoader, showLoader, success, danger } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  const [addressIds, setAddressIds] = useState([]);
  const [locations, setLocations] = useState(false);

  const {
    register,
    control,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    fields: pickupFields,
    append: appendPickup,
    remove: removePickup,
  } = useFieldArray({
    control,
    name: "pickup_address",
  });
 
  useEffect(() => {
      setValue("step",'pickup-locations');
      let addressIDs = []; 
      product?.pickup_address &&
        product?.pickup_address.map((p) => {
          const isDuplicate = pickupFields.some(
            (field) => field.address_id === p.address_id
          );
          if (!isDuplicate) {
             appendPickup(p);
             addressIDs.push(p.address_id);
          }
      });
      setAddressIds(addressIDs); 
      setValue('address_ids',addressIDs);
      setLocations(pickupLocations);
  }, [pickupLocations, product]);


  const handleNewPickupLocation = (address) => {
    let prevLocations = [...locations, address];
    setLocations(prevLocations);
  };

  const handlePickupChange = (e, address) => { 
   
    if (e.target.checked) {
      const isDuplicate = pickupFields.some(
        (field) => field.address_id === address.id
      );
      if (!isDuplicate) {
        appendPickup({
          address_id: address.id,
          title: address.title,
          group_pickup_price: 0,
          group_dropoff_price: 0,
          group_extra_km: 0,
          private_pickup_price: 0,
          private_dropoff_price: 0,
          private_extra_km: 0,
          vip_pickup_price: 0,
          vip_dropoff_price: 0,
          vip_extra_km: 0,
          isfree: 0,
        }); 
      }
    } else {
      const index = pickupFields.findIndex((t) => t.address_id === address.id);
      if (index !== -1) {
        removePickup(index);
      }
    } 
    const isIdDuplicate = addressIds.includes(address.id);
    if (isIdDuplicate) { 
        const updatedAddressIds = addressIds.filter(id => id !== address.id); 
        setAddressIds(updatedAddressIds); 
    }else{
         setAddressIds([...addressIds, address.id]); // Add address ID to the list 
    } 
  };
 
  const onSubmit = (data) => { 
    dispatch(showLoader());
    postRequest(`v1/product/${product?.id}/update`, data)
        .then((res) => {
            if (res.success) {
              dispatch(success('Locations updated successfully.')); 
            }
        })
        .catch(() => dispatch(danger('Not saved.')))
        .finally(() => {
            dispatch(hideLoader());
        });
};  
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col md={12}>
              <Tabs
                defaultActiveKey="Selected Pickup Location"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab
                  eventKey="Selected Pickup Location"
                  title="Selected Pickup Location"
                >
                  <Form
                    onSubmit={handleSubmit(onSubmit)}
                    className="form-horizontal"
                  >
                    <Row>
                      <Col md={8}>
                        <div className="accordion-item card"> 
                            <div className="card-body"> 
                                {pickupFields &&
                                  pickupFields.map((pickup, index) => (
                                    <div
                                      key={pickup.address_id}
                                      className="accordion-item card"
                                    >
                                      <h2
                                        className="accordion-header"
                                        id={`selectedPickup${index}`}
                                      >
                                        <button
                                          className="accordion-button"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target={`#selectedPickup${index}Wrap`}
                                          aria-expanded="true"
                                          aria-controls={`selectedPickup${index}Wrap`}
                                        >{pickup?.title}
                                        </button>
                                      </h2>
                                      <div
                                        id={`selectedPickup${index}Wrap`}
                                        className="accordion-collapse collapse show"
                                        aria-labelledby={`selectedPickup${index}`}
                                      >
                                        <div className="card-body">
                                          <div className="form-group row">
                                            <label
                                              htmlFor="group_pickup_price"
                                              className="col-sm-3 control-label col-form-label"
                                            >
                                              <span>
                                                Public Transportation Charges
                                              </span>
                                            </label>
                                            <div className="col-sm-3">
                                              <Controller
                                                control={control}
                                                name={`pickup_address.${index}.group_pickup_price`}
                                                render={({ field }) => (
                                                  <>
                                                    <label>Pickup</label>
                                                    <input
                                                      type="number"
                                                      {...field}
                                                      placeholder="Pickup Price"
                                                      className="form-control"
                                                    />
                                                  </>
                                                )}
                                              />
                                            </div>
                                            <div className="col-sm-3">
                                              <Controller
                                                control={control}
                                                name={`pickup_address.${index}.group_dropoff_price`}
                                                render={({ field }) => (
                                                  <>
                                                    <label>Dropoff</label>
                                                    <input
                                                      type="number"
                                                      {...field}
                                                      placeholder="Dropoff Price"
                                                      className="form-control"
                                                    />
                                                  </>
                                                )}
                                              />
                                            </div>
                                            <div className="col-sm-3">
                                              <Controller
                                                control={control}
                                                name={`pickup_address.${index}.group_extra_km`}
                                                render={({ field }) => (
                                                  <>
                                                    <label>
                                                      Price (Per km)
                                                    </label>
                                                    <input
                                                      type="number"
                                                      {...field}
                                                      placeholder="price per km"
                                                      className="form-control"
                                                    />
                                                  </>
                                                )}
                                              />
                                            </div>
                                          </div>

                                          <div className="form-group row">
                                            <label
                                              htmlFor="private_pickup_price"
                                              className="col-sm-3 control-label col-form-label"
                                            >
                                              <span>
                                                Private Transportation Charges
                                              </span>
                                            </label>
                                            <div className="col-sm-3">
                                              <Controller
                                                control={control}
                                                name={`pickup_address.${index}.private_pickup_price`}
                                                render={({ field }) => (
                                                  <input
                                                    type="number"
                                                    {...field}
                                                    placeholder="Pickup Price"
                                                    className="form-control"
                                                  />
                                                )}
                                              />
                                            </div>
                                            <div className="col-sm-3">
                                              <Controller
                                                control={control}
                                                name={`pickup_address.${index}.private_dropoff_price`}
                                                render={({ field }) => (
                                                  <input
                                                    type="number"
                                                    {...field}
                                                    placeholder="Dropoff Price"
                                                    className="form-control"
                                                  />
                                                )}
                                              />
                                            </div>
                                            <div className="col-sm-3">
                                              <Controller
                                                control={control}
                                                name={`pickup_address.${index}.private_extra_km`}
                                                render={({ field }) => (
                                                  <input
                                                    type="number"
                                                    {...field}
                                                    placeholder="price per km"
                                                    className="form-control"
                                                  />
                                                )}
                                              />
                                            </div>
                                          </div>

                                          <div className="form-group row">
                                            <label
                                              htmlFor="vip_pickup_price"
                                              className="col-sm-3 control-label col-form-label"
                                            >
                                              <span>
                                                VIP Transportation Charges
                                              </span>
                                            </label>
                                            <div className="col-sm-3">
                                              <Controller
                                                control={control}
                                                name={`pickup_address.${index}.vip_pickup_price`}
                                                render={({ field }) => (
                                                  <input
                                                    type="number"
                                                    {...field}
                                                    placeholder="Pickup Price"
                                                    className="form-control"
                                                  />
                                                )}
                                              />
                                            </div>
                                            <div className="col-sm-3">
                                              <Controller
                                                control={control}
                                                name={`pickup_address.${index}.vip_dropoff_price`}
                                                render={({ field }) => (
                                                  <input
                                                    type="number"
                                                    {...field}
                                                    placeholder="Dropoff Price"
                                                    className="form-control"
                                                  />
                                                )}
                                              />
                                            </div>
                                            <div className="col-sm-3">
                                              <Controller
                                                control={control}
                                                name={`pickup_address.${index}.vip_extra_km`}
                                                render={({ field }) => (
                                                  <input
                                                    type="number"
                                                    {...field}
                                                    placeholder="price per km"
                                                    className="form-control"
                                                  />
                                                )}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))} 
                            </div>
                        </div> 
                        <div className="row right-aside-btns">
                          <div className="col-md-12 d-flex justify-content-end gap-3">
                            <button type="submit" className="btn btn-primary">
                              Save
                            </button>
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <Card>
                          <Card.Header>Choose Pickup Locatons</Card.Header>
                          <Card.Body>
                            {locations &&
                              locations.map((checkbox, index) => ( 
                                  <Form.Check
                                    key={checkbox.id} 
                                    checked={addressIds.includes(checkbox?.id)}
                                    type={"checkbox"}
                                    {...register("address_ids")}
                                    onChange={(e) =>
                                      handlePickupChange(e, checkbox)
                                    }
                                    value={checkbox.id}
                                    id={`default-${checkbox?.id}`}
                                    label={`${checkbox?.title}`}
                                  /> 
                              ))}
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Form>
                </Tab>
                <Tab eventKey="Add Pickup Location" title="Add Pickup Location">
                  <SavePickupLocation 
                    handleNewPickupLocation={handleNewPickupLocation}
                  />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default PickupLocationSection;