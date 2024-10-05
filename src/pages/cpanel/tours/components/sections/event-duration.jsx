import React, { useCallback, useContext, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import ProductContext from "../../ProductContext";
import { Accordion, Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap"; 
import { getRequest } from "../../../../../service";
import AddEventDayPlan from "./event/add-event-day-plan";
import DayPlanItem from "./event/day-plan-item";

export default function EventDuration() { 
  const [records,setRecords] = useState([]);
  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      languages: [],
    },
  });

  const {
    fields: dayPlanFields,
    append: appendDayPlan,
    remove: removeDayPlan,
  } = useFieldArray({
    control,
    name: "dayPlans",
  });
  const { product, dispatch, hideLoader, showLoader, success, danger } = useContext(ProductContext);
  const [activities, setActivities] = useState(null);

  const getTours = useCallback(() => {
    dispatch(showLoader());
    getRequest(`v1/vendor/${product?.vendor_id}/product/activity/listing`)
      .then(res => {
        if (res.status) {
          setActivities(res.data); 
        }
      })
      .catch(() => alert("Error fetching tours"))
      .finally(() => dispatch(hideLoader()));
  }, [product?.vendor_id]);

  const getPlans = useCallback(() => {
    reset({
      dayPlans: [], // Set dayPlans to an empty array
    });
    dispatch(showLoader());
    getRequest(`v1/product/${product?.id}/event-dayplan-activity`)
      .then(res => {
        if (res.status) {
         
             res?.data.map((d,index) => { 
                appendDayPlan({
                  name: `Day ${d?.day_number}`,
                  activities: d?.plans,
                });
             });
        }
      })
      .catch(() => alert("Error fetching tours"))
      .finally(() => dispatch(hideLoader()));
  }, [product?.id]);
 

  useEffect(() => {
    if (activities == null) {
      getTours();
      getPlans();
    }
    
  }, [getTours,getPlans]);
 
  

  return (
    <>
      <Row className="align-items-end">
      <Col md={4} className="text-right">
          <Button
            onClick={() =>
              appendDayPlan({
                name: `Day ${dayPlanFields?.length + 1}`,
                activities: [],
              })
            }
          >
            Add Day
          </Button>
        </Col>
        <Col md={12}>
            <Tabs
              defaultActiveKey="Day 1"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
            {dayPlanFields &&
              dayPlanFields.map((field, index) => (
                <Tab eventKey={field?.name} title={field?.name} key={index}> 
                   <AddEventDayPlan getPlans={getPlans} productId={product?.id} options={activities} day_number={index + 1}/> 
                   <DayPlanItem plans={field?.activities}/> 
                </Tab>
              ))}
          </Tabs>
        </Col> 
      </Row>
    </>
  );
}
