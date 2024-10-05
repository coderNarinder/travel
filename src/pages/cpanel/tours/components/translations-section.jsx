import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../ProductContext";
import { useFieldArray, useForm } from "react-hook-form";
import { Card, Col, Form, Row } from "react-bootstrap";
import { postRequest } from "../../../../service"; 
import TranslationSection from "./sections/translation-section"; 

const TranslationTab = () => {
  const { product, languages, dispatch, hideLoader, showLoader, success, danger } = useContext(ProductContext);  
  const [loading,setLoading] = useState([]);
 
  const {
    register,
    control,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      languages: [],    
    },
  });

  const {
    fields: translationFields,
    append: appendTranslation,
    remove: removeTranslation,
  } = useFieldArray({
    control,
    name: "translations",
  });
 
  useEffect(() => {
    setValue("step",'translations');
    let language_ids = [];
    product?.translations && product?.translations.map((t) => {  
        const isDuplicate = translationFields.some(field => field.language_id === t.language_id);
        if (!isDuplicate) {
          language_ids.push(parseInt(t.language_id));
           appendTranslation(t);
        }
    });
    setValue("languages", product?.languages); 
  }, [product]);

  const handleTranslations = (e, language) => {
    if (e.target?.checked) {
      const isDuplicate = translationFields.some(field => field.language_id === e.target.value);
      if (!isDuplicate) {
        appendTranslation({
          name: "",
          description: "",
          short_description: "",
          language_id: e.target.value,
          language_name:language.language_name,
        });
      }
    } else {
      const index = translationFields.findIndex(
        (t) => t.language_id == e.target.value
      );
      removeTranslation(index);
    } 
  };

  const onSubmit = (data) => { 
    dispatch(showLoader());
    postRequest(`v1/product/${product?.id}/update`, data)
        .then((res) => {
            if (res.success) { 
                dispatch(success('Translation updated successfully.')); 
            }
        })
        .catch(() =>  dispatch(danger('Not saved')) )
        .finally(() => {
            dispatch(hideLoader());
        });
};  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
          <Card.Title className="h3">General Details</Card.Title> 
          <Row>
            <Col md={8}>   
                <TranslationSection translationFields={translationFields} watch={watch} register={register} control={control} errors={errors}/> 
            </Col>  
            <Col md={4}>
                    <h5 className="card-title mb-2">Choose Languages For Translations</h5>
                    {languages && languages.map((language, index) => (
                      <div className="form-check" key={index}>
                        <input
                          type="checkbox"
                          id={`customControlValidation-${language.lang_id}`}
                          className="form-check-input"
                          value={language.lang_id}
                          {...register("languages")}
                          onChange={(e) =>
                            handleTranslations(e, language)
                          }
                        /> 
                        <label
                          className="form-check-label mb-0"
                          htmlFor={`customControlValidation-${language.lang_id}`}
                        >
                          {language.language_name}
                        </label>
                      </div>
                    ))}  
            </Col> 
          </Row>
          <div className="row right-aside-btns">
            <div className="col-md-12 d-flex justify-content-end gap-3"> 
              <button type="submit" className="btn btn-primary">
                Save General Information
              </button>
            </div>
          </div>
    </form>
  );
};
export default TranslationTab;
