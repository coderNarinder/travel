import React, { useEffect, useState } from 'react';
import { getRequest } from '../../../service';
import { Link } from 'react-router-dom';
import './index.css';
import { parse } from 'date-fns';

const VendorListing = () => {
  const [vendors, setVendors] = useState([]);
  const [status, setStatus] = useState("Pending"); 
  const [pendingCount, setPendingCount] = useState(0); 
  const [activeCount, setActiveCount] = useState(0); 
  const [inactiveCount, setInactiveCount] = useState(0); 
  const [blockedCount, setBlockedCount] = useState(0); 
  const [total, setTotal] = useState(0); 

 
  useEffect(() => {
    getVendors();
  }, [status]); // Added status to dependency array to refetch when status changes

  const getVendors = () => {
    getRequest(`v1/vendor/listing?status=${status}&skip=0&limit=100`)
      .then(res => {
        setVendors(res.data);
        if(res?.meta?.total){
          setTotal(res.meta.total);
        }

        if(res.meta?.activeCount){
          setActiveCount(res.meta.activeCount);
        }

        if(res?.meta?.inactiveCount){
          setInactiveCount(res.meta.inactiveCount);
        }

        if(res?.meta?.blockedCount){
          setBlockedCount(res.meta.blockedCount);
        }
        if(res?.meta?.pendingCount){
          setPendingCount(res.meta.pendingCount);
        }
        
        
      })
      .catch(err => {
        console.log(err);
      });
  };

  const filteredVendor = status !== "All" ? vendors.filter(v => v.status == status) : vendors;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className='vendor-tabs'>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                onClick={() => setStatus("All")}
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                All ({activeCount + inactiveCount + pendingCount + blockedCount})
              </button>
              <button
                className="nav-link"
                onClick={() => setStatus("Active")}
                id="nav-active-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="false"
              >
                Active ({activeCount})
              </button>
              <button
                className="nav-link"
                onClick={() => setStatus("In-Active")}
                id="nav-In-Active-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="false"
              >
                In-Active ({inactiveCount})
              </button>

              <button
                className="nav-link"
                onClick={() => setStatus("Pending")}
                id="nav-pending-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="false"
              >
                Pending ({pendingCount})
              </button>

              <button
                className="nav-link"
                onClick={() => setStatus("Blocked")}
                id="nav-Blocked-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="false"
              >
                Blocked ({blockedCount})
              </button>
              <a
                href="/cpanel/vendor/create"
                type="button"
                className="btn btn-primary ms-auto align-self-start"
              >
                Add Vendor
              </a>
            </div>
          </nav>
          <div className="card vendor-tabs-body">
            <div className="card-body">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="table-responsive">
                    <table id="zero_config" className="table table-striped table-bordered m-0">
                      <thead>
                        <tr>
                          <th>Banner</th>
                          <th>Business Name</th>
                          <th>Status</th>
                          <th>Tours Total</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredVendor.map((vendor,index) => (
                          <tr key={index}>
                            <td width={120}><img src={vendor.logo} alt={vendor.name} /></td>
                            <td>
                              <h6>{vendor.name}</h6>
                              <p>{vendor.description}</p>
                            </td>
                            <td width={130}>{vendor.status}</td>
                            <td width={130}>{vendor.products_count}</td>
                            <td width={130}>
                              <Link to={`/cpanel/vendor-detail/${vendor.id}/info`} className='vendor-link'>Details</Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {
                      filteredVendor.length == 0 && (
                        <div className="text-center"><span>No Data</span></div>
                      )
                    }
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">2</div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorListing;
