import React, { useCallback, useContext, useEffect, useState } from 'react'
import ProductContext from '../../ProductContext';
import { Col, Form, Row } from 'react-bootstrap';
import { getRequestGod } from '../../../../../service';

const LocationSection = ({
    register, errors, watch, setValue
}) => {
    const {product, country} = useContext(ProductContext); 
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const countryID = watch('country'); 
    const stateID = watch('state'); 

    

    useEffect(() => { 
      if(product?.country_id !== null){
        getState(product?.country_id); 
        getCity(product?.state_id);
      } 
    }, [product]);


  const getState = useCallback((countryID) => {
    if (countryID) {
      getRequestGod(`v1/state/listing?skip=0&limit=100&country_id=${countryID}`)
        .then((res) => {
          setState(res.data);  
          setValue('state',product?.state_id);  
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [countryID]);

  const getCity = useCallback((stateId) => {
    if (stateID) {
      getRequestGod(`v1/city/listing?skip=0&limit=100&state_id=${stateId}`)
        .then((res) => {
          setCity(res.data);  
          setValue('city', product?.city_id); 
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [stateID]);
  
  return (
    <>
      <Row>
        <Col sm={6}>
          <Form.Group className="mb-3" >
            <Form.Label>Country</Form.Label> 
            <Form.Select aria-label="Default select example" onChange={(e) => {
              getState(e.target.value)
            }}>
            <option value="">Select Country</option>
            {country && country.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
            </Form.Select>
            {errors.country && (
              <p className="text-danger text-right">
              {errors.country.message}
              </p>
            )}
          </Form.Group>
        </Col>
        <Col sm={6}>
            <Form.Group className="mb-3" >
                <Form.Label>state</Form.Label> 
                <Form.Select aria-label="Default select example" onChange={(e) => {
                    getCity(e.target.value)
                }}>
                    <option value="">Select state</option>
                    {state && state.map((c) => (
                        <option value={c.id} key={c.id}>
                        {c.name}
                        </option>
                    ))}
                </Form.Select>
                {errors.state && (
                    <p className="text-danger text-right">
                    {errors.state.message}
                    </p>
                )}
            </Form.Group>
        </Col>
        <Col sm={6}>
            <Form.Group className="mb-3" >
                <Form.Label>city</Form.Label> 
                <Form.Select aria-label="Default select example">
                    <option value="">Select city</option>
                    {city && city.map((c) => (
                        <option key={c.id} value={c.id}>
                        {c.name}
                        </option>
                    ))}
                </Form.Select>
                {errors.city && (
                    <p className="text-danger text-right">
                    {errors.city.message}
                    </p>
                )}
            </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3" >
                <Form.Label>Address</Form.Label>
                <Form.Control type="text"
                 placeholder="Title"
                 autoComplete="on"
                 {...register("address", {
                   required: "address is required",
                 })}
                />
                {errors.address && (
                    <p className="text-danger text-right">
                    {errors.address.message}
                    </p>
                )}
        </Form.Group>
        </Col>
        <Col sm={6}>
            <Form.Group className="mb-3" >
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control type="text"
                    placeholder="Title"
                    autoComplete="on"
                    {...register("latitude", {
                    required: "latitude is required",
                    })}
                    />
                    {errors.latitude && (
                        <p className="text-danger text-right">
                           {errors.latitude.message}
                        </p>
                    )}
            </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3" >
                <Form.Label>longitude</Form.Label>
                <Form.Control type="text"
                 placeholder="Title"
                 autoComplete="on"
                 {...register("longitude", {
                   required: "longitude is required",
                 })}
                />
                {errors.longitude && (
                    <p className="text-danger text-right">
                    {errors.longitude.message}
                    </p>
                )}
        </Form.Group>
        </Col>
        <Col sm={6}></Col>
        <Col sm={6}></Col>
        <Col sm={6}></Col>
      </Row>
    </>
  )
}
export default LocationSection;