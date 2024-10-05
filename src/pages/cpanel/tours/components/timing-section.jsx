import React, { useContext } from 'react'
import ProductContext from '../ProductContext';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import ActivitySlot from './sections/activity-slot';
import EventDuration from './sections/event-duration';

export default function TimingSection() {
    const { product, dispatch, hideLoader, showLoader, success, danger} = useContext(ProductContext); 
     
  return (
    <>   
         {
          product?.type == "activity" && (
            <ActivitySlot />
          )
         }

        {
          product?.type == "event" && (
            <EventDuration product={product}/>
          )
        }

         {/* <Form.Check // prettier-ignore
            type={'radio'}
            id={`default-1`}
            label={`default 1`}
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>From</Form.Label>
             <input type="date"></input>
          </Form.Group> */}
       
    </>
  )
}
