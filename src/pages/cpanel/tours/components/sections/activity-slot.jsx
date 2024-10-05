import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'; 
import ProductContext from '../../ProductContext';
import { getRequest, postRequest } from '../../../../../service';

export default function ActivitySlot() {
  const { register, handleSubmit, setError, clearErrors,reset, formState: { errors } } = useForm();
  const { product,dispatch, hideLoader, showLoader, success, danger  } = useContext(ProductContext);
  const [records, setRecords] = useState(null);

  useEffect(() => {
        if(records == null){
            getRecords();
        }
  },[]);

  const getRecords = () => { 
        dispatch(showLoader());
        getRequest(`v1/product/${product?.id}/slots`)
        .then((res) => {
          if (res.status) {
            setRecords(res.data); 
          }
        }) 
        .finally(() => {
          dispatch(hideLoader());
        });
    
  };



  const onSubmit = (data) => {
    if (data.end_time <= data.start_time) {
      setError('end_time', { type: 'manual', message: 'End time must be greater than start time.' });
    } else {
        dispatch(showLoader());
        postRequest(`v1/product/${product?.id}/slot/save`,data)
        .then((res) => {
          if (res.success) {
            dispatch(success('Slot saved successfully.'));  
            reset();
            getRecords();
          }
        })
        .catch((error) =>   dispatch(success(error?.response.data?.error)) )
        .finally(() => {
          dispatch(hideLoader());
        });
    }
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="align-items-end">
              <div className="col-md-6">
                <label>Start Time:</label>
                <input
                  type="time"
                  className="form-control"
                  {...register('start_time', { required: "Start time is required" })}
                />
                {errors.start_time && <p className="text-danger text-right">{errors.start_time.message}</p>}
              </div>
              <div className="col-md-6">
                <label>End Time:</label>
                <input
                  type="time"
                  className="form-control"
                  {...register('end_time', { required: "End time is required" })}
                />
                {errors.end_time && <p className="text-danger text-right">{errors.end_time.message}</p>}
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary mt-4">
                  Save
                </button>
              </div>
            </Row>
          </Form>
        </Col>
        <Col md={6}> 
                  <table className='table'>
                    <tr>
                        <th>Slot</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                    {
                        records && records.map((slot,index) => (
                            <tr key={slot.id}>
                                <td>{index + 1}</td>
                                <td>{slot.start_time}</td>
                                <td>{slot.end_time}</td>
                            </tr>
                        ))
                    }
                  </table> 
        </Col>
      </Row>
    </>
  );
}
