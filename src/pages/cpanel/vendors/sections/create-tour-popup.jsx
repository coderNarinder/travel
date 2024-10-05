import React, { useState } from 'react';
import { postRequest } from '../../../../service';
import Popup from '@components/popup';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CeateTourPopup = ({
    slug
}) => {
  const [showModal, setShowModal] = useState(false);
  const [durationArray, setDurations] = useState([]);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue, // Destructure setValue from useForm
    formState: { errors },
  } = useForm();

  const tours = localStorage.getItem('tour_contents') !== null ? JSON.parse(localStorage.getItem('tour_contents')) : [];

  // Handle type selection and fetch durations based on the selected type
  const getDurations = (event) => {
    const selectedType = event.target.value; // Get the selected value 
    // Set form value programmatically
    setValue('type', selectedType); 
    // Fetch durations based on selected type
    if (tours?.durations && tours.durations[selectedType]) {
      setDurations(tours.durations[selectedType]);
    } else {
      setDurations([]); // Reset if no durations are found
    }
  };

  const onSubmit = (data) => {
    
    postRequest(`v1/vendor/${slug}/product/store`, data)
      .then(res => {
        if (res.success) {
          alert("Vendor created successfully");
          window.location.href = `/cpanel/vendor-detail/${slug}/tour/${res.data.id}/edit`;
        // navigate(`/cpanel/vendor-detail/${slug}/tour/${tourId}/edit`);
        }
      })
      .catch(() => alert("Error creating category"))
      .finally(() => console.log(1));
  };

  return (
    <>
      <button className='btn btn-primary' onClick={handleOpenModal}>Add New Tour</button>
      {showModal && (
        <Popup title={`Add New`} show={showModal} onClose={handleCloseModal} onSave={() => setShowModal(false)}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type</Form.Label>
              <Form.Select
                onChange={getDurations} 
              > 
               <option value={''}>Choose Type</option>
                {tours?.type && tours?.type.length > 0 && tours?.type.map((t, index) => (
                  <option value={t.value} key={index}>{t.name}</option>
                ))}
              </Form.Select>
              {errors.type && <p className="text-danger text-right">{errors.type.message}</p>}
            </Form.Group>
            <input type="hidden" {...register('type', { required: "This field is required" })}/>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Duration Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register('duration', { required: "This field is required" })}
              >
                <option value={''}>Choose Duration</option>
                {durationArray.length > 0 && durationArray.map((t, index) => (
                  <option value={t.value} key={index}>{t.name}</option>
                ))}
              </Form.Select>
              {errors.duration && <p className="text-danger text-right">{errors.duration.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Title</Form.Label>
              <Form.Control
                type="text"
                {...register('name', { required: "This field is required" })}
              />
              {errors.name && <p className="text-danger text-right">{errors.name.message}</p>}
            </Form.Group>

            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </Form>
        </Popup>
      )}
    </>
  );
};

export default CeateTourPopup;
