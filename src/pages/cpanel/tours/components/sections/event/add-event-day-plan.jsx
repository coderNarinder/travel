import React, { useState } from 'react' 
import { useForm } from 'react-hook-form';
import Popup from '../../../../../../components/popup';
import { postRequest } from '../../../../../../service';
import { Card, Col, Form, Row } from 'react-bootstrap';
import ReactSelect from 'react-select';
import ReactGoogleAutocomplete from 'react-google-autocomplete';

export default function AddEventDayPlan({
   day_number,
   options,
   productId,
   getPlans
}) {
   const [showModal, setShowModal] = useState(false); 
   const handleCloseModal = () => setShowModal(false);
   const handleOpenModal = () => setShowModal(true); 
   const {
     register,
     watch,
     handleSubmit,
     reset,
     setValue, // Destructure setValue from useForm
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
        postRequest(`v1/product/${productId}/event-dayplan-activity`, data)
        .then(res => {
          if (res.success) {
            alert("Vendor created successfully");
            reset();
            getPlans();
            handleCloseModal();
          }
        }) 
        .catch(() => alert("Error creating category"))
        .finally(() => console.log(1));
    };
  


  return (
    <> 
        <button className='btn btn-primary' onClick={handleOpenModal}>Add New Activity</button>
      {showModal && (
        <Popup title={`Activity ${day_number}`} show={showModal} onClose={handleCloseModal} onSave={() => setShowModal(false)}>
          <Form onSubmit={handleSubmit(onSubmit)}> 
            <input type="hidden" value={day_number}  {...register(`day_number`)}/>
                  <Row>
                    <Col md={12}>
                      <Form.Label>Type</Form.Label>  
                        <Form.Select
                            aria-label="Default select example"
                            {...register(`type`, {
                                required: "Type is required",
                            })}
                            >
                            <option value="1">Custom</option>
                            <option value="2">Activity</option>
                       </Form.Select> 
                    </Col>
                    <Col md={12}>
                      {watch(`type`) == 2 ? (
                        <Form.Group>
                          <Form.Label>Choose Activity</Form.Label> 
                          <Form.Select
                            aria-label="Default select example"
                            {...register(`title`, {
                              required: "Activity is required",
                            })}
                            >
                            <option value="">Choose</option> 
                            {
                              options.map((activity, index) => (
                                 <option key={index} value={activity.id}>{activity.name}</option>
                                 ))

                            }
                       </Form.Select>
                            {errors?.title && (
                                <p className="text-danger">
                                    {errors?.title.message}
                                </p>
                            )}
                        </Form.Group>
                      ) : (
                        <Form.Group>
                          <Form.Label>Title</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            {...register(`title`, {
                              required: "Title is required",
                            })}
                          />
                           {errors?.title && (
                                <p className="text-danger">
                                {errors.title.message}
                                </p>
                            )}
                        </Form.Group>
                      )}
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                      <Form.Label>Start Time</Form.Label>
                      <input
                        type="time"
                        className="form-control"
                        {...register(`start_time`, {
                          required: "Start Time is required",
                        })}
                      />
                       {errors?.start_time && (
                        <p className="text-danger">
                          {errors?.start_time.message}
                        </p>
                      )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                      <Form.Label>End Time</Form.Label>
                      <input
                        type="time"
                        className="form-control"
                        {...register(`end_time`, {
                          required: "End Time is required",
                          validate: (value) => {
                            const startTime = watch(`start_time`);
                            return (
                              startTime && value > startTime
                            ) || "End time must be later than start time";
                          },
                        })}
                      />
                      {errors?.end_time && (
                        <p className="text-danger">
                          {errors?.end_time.message}
                        </p>
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
                          placeholder="Search for an location (house number, street, etc.)" 
                          onPlaceSelected={handleLocation}
                        />
                        {errors.address && (
                          <p className="text-danger">{errors.address.message}</p>
                        )}
                      </Form.Group>
                    </Col> 
                  </Row>  
                  <button type="submit" className="btn btn-primary">
                  Create
                  </button>
          </Form>
        </Popup>
      )}
    </>
  )
}
