import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../ProductContext';
import { postRequest } from '../../../../service';
import { Accordion, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function TermAndConditions() {
    const { product, dispatch, hideLoader, showLoader, success, danger } = useContext(ProductContext);
    const [loading, setLoading] = useState(false); 
    const {
     register,
     control,
     setValue,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm({
      
   });



useEffect(() => {
    setValue("step",'term-&-conditions');
    setValue("termsAndConditions",product?.termsAndConditions);
    setValue("privacyPolicy",product?.privacyPolicy);

}, [product]);


const onSubmit = (data) => { 
    dispatch(showLoader());
    postRequest(`v1/product/${product?.id}/update`, data)
        .then((res) => {
            if (res.success) {
              dispatch(success('updated successfully.'))
            }
        })
        .catch(() => dispatch(danger('Not saved')))
        .finally(() => {
            dispatch(hideLoader());
        });
};  
  return (
    <>
        <Form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
          <Card.Title className="h3">General Details</Card.Title>
          <Accordion  defaultActiveKey={['0']} alwaysOpen> 
          <Row>
            <Col md={8}> 
           
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Privacy Policy </Accordion.Header>
                    <Accordion.Body> 
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                            style={{ height: "200px" }}
                            id="privacyPolicy"
                            as="textarea"
                            aria-label="With textarea"
                            {...register("privacyPolicy", {
                                required: "Tour Description is required",
                            })}
                            />
                            {errors.privacyPolicy && (
                            <p className="text-danger text-right">
                                {errors.privacyPolicy.message}
                            </p>
                            )}
                        </Form.Group>
                       
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Terms & Conditions</Accordion.Header>
                    <Accordion.Body>
                    <Form.Group className="mb-3">
                            <Form.Label>termsAndConditions</Form.Label>
                            <Form.Control
                            style={{ height: "200px" }}
                            id="termsAndConditions"
                            as="textarea"
                            aria-label="With textarea"
                            {...register("termsAndConditions", {
                                required: "Tour termsAndConditions is required",
                            })}
                            />
                            {errors.termsAndConditions && (
                            <p className="text-danger text-right">
                                {errors.termsAndConditions.message}
                            </p>
                            )}
                        </Form.Group>

                    </Accordion.Body>
                </Accordion.Item> 
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
        </Form>
    </>
  )
}
