import React, { useContext } from 'react';
import VendorContext from './VendorContext';

const Details = () => {
  const vendor = useContext(VendorContext);

   
 
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <h5 className="card-title">Vendor Detail</h5>
          <br />
          <div className="card-body-vendor-banner">
            {vendor?.banner && <img src={vendor.banner} alt="Vendor Banner" />}
          </div>
          <div className="col-md-8">
            <h3>{vendor?.name || 'Vendor Name'}</h3>
            <strong>Description:</strong>
            <p>{vendor?.description || 'Description not available'}</p>
            <div className="row mb-1">
              <div className="col-md-3">Address</div>
              <div className="col-md-9">{vendor?.address || 'Address not available'}</div>
            </div>
            <div className="row mb-1">
              <div className="col-md-3">Categories</div>
              <div className="col-md-9 d-flex gap-1">{vendor?.categoryData && vendor?.categoryData?.length > 0 && vendor?.categoryData.map((cate) => (
                <span className='badge-new' key={cate.id}>{cate.name}</span>
              ))}</div>
            </div>
            <div className="row mb-1">
              <div className="col-md-3">Country</div>
              <div className="col-md-9">{vendor?.country ? vendor.country.nicename : 'coming soon'}</div>
            </div>
            <div className="row mb-1">
              <div className="col-md-3">State</div>
              <div className="col-md-9">{vendor?.state ? vendor.state.name : 'coming soon'}</div>
            </div>
            <div className="row mb-1">
              <div className="col-md-3">City</div>
              <div className="col-md-9">{vendor?.city ? vendor.city.name : 'coming soon'}</div>
            </div>
            <div className="row mb-1">
              <div className="col-md-3">Longitude</div>
              <div className="col-md-9">{vendor?.longitude || 'coming soon'}</div>
            </div>
            <div className="row mb-1">
              <div className="col-md-3">Latitude</div>
              <div className="col-md-9">{vendor?.latitude || 'coming soon'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
