import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Form, Image, Row } from "react-bootstrap"; 
import { useForm } from "react-hook-form";
import UploadFile from "../../../../components/upload-file";
import ProductContext from "../ProductContext";
import { postRequest } from "../../../../service";

export default function GallerySection() {
   const { product, dispatch, hideLoader, showLoader, success, danger } = useContext(ProductContext);
   const [loading, setLoading] = useState(false);
   const [galleryImages, setGalleryImages] = useState([]);
   const {
    register,
    control,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
     
  });
  const handleImageUpload = (name, url) => {
    console.log(name,url);
    switch (name) {
      case "images":
        let newImages = [...galleryImages, url]; // Spread the old array and add the new URL
        setValue(name, newImages); // Update form field with new images array
        setGalleryImages(newImages); // Update galleryImages state
        break; 
      default:
        setValue(name, url);
        break;
    }
  };

useEffect(() => {
    setValue("step",'gallery');
    setGalleryImages(product?.images); 
    setValue('images',(product?.images !== null ? product?.images : []));
}, [product]);

const onSubmit = (data) => { 
    dispatch(showLoader());
    postRequest(`v1/product/${product?.id}/update`, data)
        .then((res) => {
            if (res.success) {
              dispatch(success('Gallery updated successfully.')); 
            }
        })
        .catch(() =>   dispatch(success('Not saved')))
        .finally(() => {
            dispatch(hideLoader());
        });
};  

  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
            <Row>
              <Col md={12}>
                <Card.Header>Gallery </Card.Header>
                <UploadFile
                  onUpload={handleImageUpload}
                  name={"images"}
                  path={"tours/"}
                  type={"product"}
                  val={""}
                />
                  <input
                        type="hidden"
                        {...register(`images`)}
                      />
                      {errors.images && (
                        <p className="text-danger text-right">
                          {errors.images.message}
                        </p>
                      )}

                  <div className=" row  mt-3">  
                     
                      {galleryImages &&
                        galleryImages.map((image, index) => (  
                             <Col xs={6} md={2} key={index} className="mb-3">
                               <Image src={image} rounded width={'100%'}/>
                            </Col>
                        ))}
                    
                    </div> 
                    <div className="row right-aside-btns">
                    <div className="col-md-12 d-flex justify-content-end gap-3"> 
                    <button type="submit" className="btn btn-primary">
                        Save Gallery
                    </button>
                    </div>
                </div>
              </Col>
              
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
