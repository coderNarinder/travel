import Breadcrum from "./components/breadcrums/Breadcrum";
import TourDetails from "./components/details/TourDetails";
import TourPackage from "./components/details/TourPackage";
import Gallery from "./components/gallery/Gallery";
import './activities.css';
import { getRequest } from "../../service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Activities = () => {
  const { id } = useParams();
  const [galleryImages, setGalleryImages] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => { 
    productDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productDetail = () => {
    getRequest(`v1/product/${id}/detail`)
      .then((res) => {
        setProduct(res.data); 
        setGalleryImages(res?.data?.images);
      })
      .catch((err) => console.log(err));
  };

  console.log(galleryImages);

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Breadcrum />
            </div>
          </div>
          <div className="row mb-6">
            <Gallery product={product} />
          </div>
          <div className="row">
            <div className="col-md-8">
              <TourDetails product={product} />
            </div>
            <div className="col-md-4">
              <TourPackage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
