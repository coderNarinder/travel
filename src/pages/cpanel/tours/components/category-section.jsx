import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../ProductContext';
import { postRequest } from '../../../../service';
import { Accordion, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
export default function CategorySection() {
    const { product, categories, dispatch, hideLoader, showLoader, success, danger } = useContext(ProductContext);
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
    setValue("step",'categories');
    setValue('categories', product?.categories);  
}, [product]);

const onSubmit = (data) => { 
    dispatch(showLoader());
    postRequest(`v1/product/${product?.id}/update`, data)
        .then((res) => {
            if (res.success) {
              dispatch(success('Categories assigned successfully.')); 
            }
        })
        .catch(() =>   dispatch(danger('something wrong')))
        .finally(() => {
            dispatch(hideLoader());
        });
};  

  return (
    <>
    <Form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
    <Row>
        <Col xs={12}>
        <div className="accordion-item card">
                <h2 className="accordion-header" id="category">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#categoryWrap" aria-expanded="true" aria-controls="categoryWrap">
                    Category
                  </button>
                </h2>
                <div id="categoryWrap" className="accordion-collapse collapse show" aria-labelledby="category">
                  <div className="card-body">
                    {categories && categories.map((cate) => (
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
                                  <div className="form-check mt-2 mb-3" key={sub.id}>
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
                                          <div
                                            className="form-check mt-2 mb-3"
                                            key={child.id}
                                          >
                                            <input
                                              type="checkbox"
                                              id={`customControlValidation-${child.id}`}
                                              {...register(`categories`, {
                                                required: "Category is required",
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
                                      ))}
                                  </div> 
                              ))}
                          </div>
                        </div> 
                    ))}

                      {errors.categories && (
                        <p className="text-danger text-right">
                          {errors.categories.message}
                        </p>
                      )}
                  </div>
                </div>
              </div>
              <div className="row right-aside-btns">
                    <div className="col-md-12 d-flex justify-content-end gap-3"> 
                    <button type="submit" className="btn btn-primary">
                        Assign Categories
                    </button>
                    </div>
                </div>
        </Col>
    </Row>
    </Form>
    </>
  )
}
