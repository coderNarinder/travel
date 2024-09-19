import { useEffect, useState } from "react";
import { Breadcrumb, Col, Row, Tab, Tabs } from "react-bootstrap";
import ProductContext from "./ProductContext";
import ProductGeneralSection from "./components/product-general-section";
import { Link, useParams } from "react-router-dom";
import { getRequest, getRequestGod } from "../../../service";
import PickupLocationSection from "./components/pickup-location-section";
import GallerySection from "./components/gallery-section";
import OtherSection from "./components/other-section";
import TermAndConditions from "./components/term-and-conditions";
import CategorySection from "./components/category-section";
import TranslationTab from "./components/translations-section";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../../reducers/loaderSlice";
import { success, danger } from '../../../reducers/toasterSlice';
import "./index.css";
const CreateTour = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]); 
  const { id } = useParams();
  const [country, setCountry] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pickupLocations, setPickupLocations] = useState([]);
  useEffect(() => { 
    productDetail();
    getLanguages();
    getCategories();
  }, []);

  const productDetail = () => {
    getRequest(`v1/product/${id}/detail`)
      .then((res) => {
        setProduct(res.data);  
        setPickupLocations(res.pickupLocations); 
        getCountry();
      }).catch((err) => console.log(err));
  };

  const getCountry = () => {
      getRequestGod("v1/country/listing?skip=0&limit=1000")
        .then((res) => {
          setCountry(res.data); 
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const getLanguages = () => {
      getRequestGod("v1/languages/listing?skip=0&limit=50")
        .then((res) => {
          setLanguages(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const getCategories = () => {
    getRequestGod("v1/category/listing?skip=0&limit=50&tree=1&parent=0")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ProductContext.Provider value={{product, country, languages, pickupLocations, categories, dispatch, hideLoader, showLoader, success, danger}}>
      <div className="container-fluid">
        <Breadcrumb>
          <Breadcrumb.Item><Link to={'/cpanel'}>Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
              <Link to={`/cpanel/vendor-detail/${product?.vendor_id}/tours`}>{product?.vendor?.name}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{product?.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md={12}>
            <Tabs defaultActiveKey="General Information" id="uncontrolled-tab-example" className="border-0">
              <Tab eventKey="General Information" title="General Information">
                <ProductGeneralSection />
              </Tab>
              <Tab eventKey="Translations" title="Translations">
                <TranslationTab />
              </Tab>
              <Tab eventKey="Categories" title="Categories">
                <CategorySection />
              </Tab>
              <Tab eventKey="Pickup Locations" title="Pickup Locations">
                <PickupLocationSection pickup_addresses={pickupLocations}/>
              </Tab>
              <Tab eventKey="contact" title="Gallery">
                <GallerySection />
              </Tab>
              <Tab eventKey="Terms and Conditions" title="Terms and Conditions"> 
                  <TermAndConditions />
              </Tab>
              <Tab eventKey="Other Information" title="Other Information">
                { product?.id && ( <OtherSection /> )}
              </Tab>
            </Tabs>
          </Col>
        </Row>  
      </div>
    </ProductContext.Provider>
  )
}
export default CreateTour;