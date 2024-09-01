import React, { useContext } from 'react';
import VendorContext from './VendorContext';

const Details = () => {
  const vendor = useContext(VendorContext);

  console.log(vendor);
 
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <h5 className="card-title">Vendor Detail</h5>
          <br />
          <div className="card-body-vendor-banner">
            {/* {vendor?.banner && <img src={vendor.banner} alt="Vendor Banner" />} */}
            <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/f9cxlacfjbuydsfrl4ke/Dubai%20Palm%20Jumeirah%2C%20Burj%20Al%20Arab%20%26%20Marina%20Boat%20Sightseeing%20Tour%20-%20Klook.jpg" alt="" />
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
              <div className="col-md-9">{vendor?.categories.length ? vendor.categories.join(', ') : 'coming soon'}</div>
            </div>
            <div className="row mb-1">
              <div className="col-md-3">Country</div>
              <div className="col-md-9">{vendor?.country ? vendor.country.nicename : 'coming soon'}</div>
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
