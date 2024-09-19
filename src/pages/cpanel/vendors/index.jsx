import React, { useCallback, useEffect, useState } from 'react';
import { getRequest } from '../../../service';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const VendorListing = () => {
  const [vendors, setVendors] = useState([]);
  const [status, setStatus] = useState("Pending");
  const [pendingCount, setPendingCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [inactiveCount, setInactiveCount] = useState(0);
  const [blockedCount, setBlockedCount] = useState(0);
  const [records, setRecords] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setLimit] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  const [total, setTotal] = useState(0);

  const getVendors =  useCallback(() => {
    getRequest(`v1/vendor/listing?status=${status}&skip=${itemOffset}&limit=${itemsPerPage}`)
      .then(res => {
        setVendors(res.data);
        if(res?.meta?.total){
          setTotal(res.meta.total);
        }
        if(res?.meta?.total > 0){
          setPageCount(Math.ceil(res?.meta?.total / itemsPerPage));
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
  },[]);
  useEffect(() => {
    getVendors();
  }, [status, itemOffset,getVendors]);
 
  const filteredVendor = status !== "All" ? vendors.filter(v => v.status == status) : vendors;
  const handlePageClick = (event) => {
    const newOffset = event.selected >= 1 ? ((event.selected) * itemsPerPage) : 0;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  }

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
                  <div className="vendor-list">
                    <div className="vendor-list-header">
                      <div className="vendor-list-header-item">Banner</div>
                      <div className="vendor-list-header-item">Business Name</div>
                      <div className="vendor-list-header-item">Status</div>
                      <div className="vendor-list-header-item">Tours Total</div>
                      <div className="vendor-list-header-item">Actions</div>
                    </div>

                    {filteredVendor.map((vendor, index) => (
                      <div className="vendor-list-row" key={index}>
                        <div className="vendor-list-item">
                          <img src={vendor.logo} alt={vendor.name} />
                        </div>
                        <div className="vendor-list-item">
                          <h6>{vendor.name}</h6>
                          <p>{vendor.description}</p>
                        </div>
                        <div
                          className={`vendor-list-item ${
                            vendor.status === 'Active' ? 'status-active' :
                            vendor.status === 'In-Active' ? 'status-inactive' :
                            vendor.status === 'Pending' ? 'status-pending' :
                            vendor.status === 'Blocked' ? 'status-blocked' : ''
                          }`}
                          style={{ width: '130px' }}
                        >
                          {vendor.status}
                        </div>
                        <div className="vendor-list-item">{vendor.products_count}</div>
                        <div className="vendor-list-item">
                          <Link to={`/cpanel/vendor-detail/${vendor.id}/info`} className="vendor-link">Details</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  {
                    filteredVendor.length == 0 && (
                      <div className="text-center mt-4"><span>No Data</span></div>
                    )
                  }
                  <ReactPaginate
                    className="pagination justify-content-center mt-4"
                    breakLabel="..."
                    nextLabel="&nbsp;Next&nbsp;"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={itemsPerPage}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                  />
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
