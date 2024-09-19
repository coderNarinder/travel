import React, { useContext, useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import TagSection from './sections/tags';
import ProductContext from '../ProductContext';
import { postRequest } from '../../../../service';

export default function OtherSection() {
    const { product, dispatch, hideLoader, showLoader, success, danger} = useContext(ProductContext);
    const {
        register,
        setValue,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();

    useEffect(() => {
        setValue("step",'other-information'); 
        setValue('included', product?.included);
        setValue('excluded', product?.excluded);
        setValue('tags', product?.tags);
        setValue('whatToExpect', product?.whatToExpect);
    }, [product]);
      

    const onSubmit = (data) => { 
        dispatch(showLoader());
        postRequest(`v1/product/${product?.id}/update`, data)
            .then((res) => {
                if (res.success) {
                    dispatch(success('Data updated successfully.')); 
                }
            })
            .catch(() =>   dispatch(danger('Not saved')))
            .finally(() => {
                dispatch(hideLoader());
            });
    };  

  return (
   <>
    <Form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
    <Row>
    <Col xs={4}>
        <div className="accordion-item card other-information-card mb-3">
            <h2 className="accordion-header" id="tags">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tagsWrap" aria-expanded="true" aria-controls="tagsWrap">
                Tags
                </button>
            </h2>
            <div id="tagsWrap" className="accordion-collapse collapse show" aria-labelledby="tags">
                <div className="card-body">
                <TagSection  name={'tags'} type={'tags'} register={register}/>
                </div>
            </div>
        </div>
    </Col>

    <Col xs={4}>
        <div className="accordion-item card other-information-card mb-3">
            <h2 className="accordion-header" id="includes">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#includesWrap" aria-expanded="true" aria-controls="includesWrap">
                Included
                </button>
            </h2>
            <div id="includesWrap" className="accordion-collapse collapse show" aria-labelledby="includes">
                <div className="card-body">
                <TagSection  name={'included'} type={'Included'} register={register}/>
                </div>
            </div>
        </div>  
    </Col>

    <Col xs={4}>
       <div className="accordion-item card other-information-card mb-3" >
            <h2 className="accordion-header" id="includes">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#includesWrap" aria-expanded="true" aria-controls="includesWrap">
                Excluded
                </button>
            </h2>
            <div id="includesWrap" className="accordion-collapse collapse show" aria-labelledby="includes">
                <div className="card-body">
                <TagSection type={'Excluded'} name={'excluded'} register={register}/>
                </div>
            </div>
        </div> 
    </Col>

    <Col xs={4}>
       <div className="accordion-item card other-information-card mb-3">
            <h2 className="accordion-header" id="includes">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#whatToExpect" aria-expanded="true" aria-controls="whatToExpect">
                What To Expect
                </button>
            </h2>
            <div id="whatToExpect" className="accordion-collapse collapse show" aria-labelledby="includes">
                <div className="card-body">
                <TagSection type={'whatToExpect'} name={'whatToExpect'} register={register}/>
                </div>
            </div>
        </div> 
    </Col>
    
    <Col md={12}>
        <div className="row right-aside-btns">
            <div className="col-md-12 d-flex justify-content-end gap-3"> 
            <button type="submit" className="btn btn-primary">
                Save
            </button>
            </div>
        </div>
    </Col>
   </Row>
   </Form>
   </>
  )
}
