import React from "react";
import { Form, Collapse } from "react-bootstrap";
import "./sidebar.scss";

const SidebarFilters = () => {
  return (
    <div className="content-left order-lg-first">
      <div className="sidebar-left border-1 background-body">
        <div className="box-filters-sidebar">
          {/* Filter Price */}
          <div className="block-filter border-1">
            <h6 className="text-lg-bold item-collapse neutral-1000">
              Filter Price
            </h6>
            <Collapse in={true}>
              <div className="box-collapse scrollFilter">
                <div className="pt-20">
                  <div className="box-slider-range">
                    {/* Replace with a custom or third-party range slider */}
                    <div id="slider-range" className="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                      {/* Range Slider */}
                    </div>
                    <div className="box-value-price">
                      <span className="text-md-medium neutral-1000">$0</span>
                      <span className="text-md-medium neutral-1000">$1,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>

          {/* Vendor */}
          <div className="block-filter border-1">
            <h6 className="text-lg-bold item-collapse neutral-1000">
              Vendor
            </h6>
            <Collapse in={true}>
              <div className="box-collapse scrollFilter">
                <Form.Group className="pt-20">
                  <Form.Check
                    type="checkbox"
                    id="vendor-check1"
                    label="Brand 1"
                    className="text-md-regular neutral-1000"
                  />
                  <Form.Check
                    type="checkbox"
                    id="vendor-check2"
                    label="Brand 2"
                    className="text-md-regular neutral-1000"
                  />
                  <Form.Check
                    type="checkbox"
                    id="vendor-check3"
                    label="Brand 3"
                    className="text-md-regular neutral-1000"
                  />
                  <Form.Check
                    type="checkbox"
                    id="vendor-check4"
                    label="Brand 4"
                    className="text-md-regular neutral-1000"
                  />
                  <Form.Check
                    type="checkbox"
                    id="vendor-check5"
                    label="Brand 5"
                    className="text-md-regular neutral-1000"
                  />
                  <Form.Check
                    type="checkbox"
                    id="vendor-check6"
                    label="Brand 6"
                    className="text-md-regular neutral-1000"
                  />
                </Form.Group>
              </div>
            </Collapse>
          </div>

          {/* Customer Rating */}
          <div className="block-filter border-1">
            <h6 className="text-lg-bold item-collapse neutral-1000">
              Customer Rating
            </h6>
            <Collapse in={true}>
              <div className="box-collapse scrollFilter">
                <Form.Group className="pt-20">
                  <Form.Check
                    type="checkbox"
                    id="rating-check1"
                    label="4 Stars & Up"
                    className="text-md-regular neutral-1000"
                  />
                  <Form.Check
                    type="checkbox"
                    id="rating-check2"
                    label="3 Stars & Up"
                    className="text-md-regular neutral-1000"
                  />
                  <Form.Check
                    type="checkbox"
                    id="rating-check3"
                    label="2 Stars & Up"
                    className="text-md-regular neutral-1000"
                  />
                  <Form.Check
                    type="checkbox"
                    id="rating-check4"
                    label="1 Stars & Up"
                    className="text-md-regular neutral-1000"
                  />
                </Form.Group>
              </div>
            </Collapse>
          </div>

          {/* Availability */}
          <div className="block-filter border-1">
            <h6 className="text-lg-bold item-collapse neutral-1000">
              Availability
            </h6>
            <Collapse in={true}>
              <div className="box-collapse scrollFilter">
                <Form.Group className="pt-20">
                  <Form.Check
                    type="checkbox"
                    id="availability-check1"
                    label="Include Out of Stock"
                    className="text-md-regular neutral-1000"
                  />
                </Form.Group>
              </div>
            </Collapse>
          </div>

          {/* Discount */}
          <div className="block-filter border-1">
            <h6 className="text-lg-bold item-collapse neutral-1000">
              Discount
            </h6>
            <Collapse in={true}>
              <div className="box-collapse scrollFilter">
                <Form.Group className="pt-20">
                  <Form.Check
                    type="checkbox"
                    id="discount-check1"
                    label="30% Off or More"
                    className="text-md-regular neutral-1000"
                  />
                  <Form.Check
                    type="checkbox"
                    id="discount-check2"
                    label="20% Off or More"
                    className="text-md-regular neutral-1000"
                  />
                  <Form.Check
                    type="checkbox"
                    id="discount-check3"
                    label="10% Off or More"
                    className="text-md-regular neutral-1000"
                  />
                </Form.Group>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
