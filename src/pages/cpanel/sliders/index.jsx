import React, { useEffect, useState } from 'react'
import { getRequest } from '../../../service';
import { Link } from 'react-router-dom';
const SliderListing = () => {
  const [records, setRecords] = useState([]);  
  const [total, setTotal] = useState(0);  
  useEffect(() => {
    getSliders();
  }, []);  

  const getSliders = () => {
    getRequest(`v1/slider/listing?skip=0&limit=10`)
      .then(res => {
        setRecords(res.data);
        if(res?.meta?.total){
          setTotal(res.meta.total);
        } 
      })
      .catch(err => {
        console.log(err);
      });
  }; 
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <nav className='vendor-tabs'>
          <div className="nav nav-tabs border-0" id="nav-tab" role="tablist"> 
            <a
              href="/cpanel/slider/create"
              type="button"
              className="btn btn-primary ms-auto align-self-start"
            >
              Add Slider
            </a>
          </div>
        </nav>
        <div className="card vendor-tabs-body card-rounded mt-2">
                <div className="card-body">
                  <div className="vendor-list">
                    <div className="vendor-list-header">
                      <div className="vendor-list-header-item">Banner</div>
                      <div className="vendor-list-header-item">Description</div>
                      <div className="vendor-list-header-item">Status</div>
                      <div className="vendor-list-header-item">Change</div>
                      <div className="vendor-list-header-item">Remove</div>
                    </div>
                    {records.map((vendor, index) => (
                      <div className="vendor-list-row" key={index}>
                        <div className="vendor-list-item">
                          <img src={vendor.image} alt={vendor.title} />
                        </div>
                        <div className="vendor-list-item">
                          <h6>{vendor.title}</h6>
                          <p>{vendor.description}</p>
                        </div>
                        <div
                          className={`vendor-list-item ${
                            vendor.status === 1 ? 'status-active' :
                            vendor.status === 0 ? 'status-inactive' : ''
                          }`}
                        >
                          { vendor.status == 1 ? 'Active' : 'In-Active'}
                        </div>
                        <div className="vendor-list-item">
                          <Link to={`/cpanel/slider/${vendor.id}/edit`} className='vendor-link'>Edit</Link>
                        </div>
                        <div className="vendor-list-item">
                          <Link to={`/cpanel/slider/${vendor.id}/edit`} className='vendor-link'>Delete</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  {
                    records.length == 0 && (
                      <div className="text-center mt-4"><span>No Data</span></div>
                    )
                  }
              </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default SliderListing