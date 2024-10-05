import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRequest, postRequest } from '../../../service';
import CeateTourPopup from './sections/create-tour-popup';

const TourList = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const limit = 20;

  const [openPopup, setOpenPopup] = useState(false);
 
  const getTours = useCallback(() => {
    setLoading(true);
    getRequest(`v1/vendor/${slug}/product/listing?skip=${skip}&limit=${limit}`)
      .then(res => {
        if (res.status === "success") {
          setRecords(res.data);
          setTotal(res.meta.total);
          setPage(1);
          setSkip(0);
        }
      })
      .catch(() => alert("Error fetching tours"))
      .finally(() => setLoading(false));
  }, [limit, skip, slug]);

  useEffect(() => {
    getTours();
  }, [getTours]);

 
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className='d-flex align-items-center justify-content-between mb-2'>
            <span>Citymax Hotel Bur Dubai's Tour list:</span>
            
            <CeateTourPopup slug={slug}/>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="align-items-center row">
                <div className="col-lg-7">
                  <h6 className="fs-16 mb-0">Showing {skip + 1} – {skip + records.length} of {total} results</h6>
                </div>
                <div className="col-lg-5">
                  <div className="candidate-list-widgets">
                    <div className="row">
                      <div className="col-lg-6">
                        <select className="form-select" data-trigger="true" aria-label="Default select example">
                          <option value="df">Default</option>
                          <option value="ne">Newest</option>
                          <option value="od">Oldest</option>
                          <option value="rd">Random</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <select className="form-select" data-trigger="true" aria-label="Default select example">
                          <option value="df">All</option>
                          <option value="8">8 per Page</option>
                          <option value="12">12 per Page</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="candidate-list">
                {loading && 'Loading...'}
                {records.map((record, index) => (
                  <div className="candidate-list-box custom-card tour-card m-0 mt-4" key={index}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-auto">
                          <div className="candidate-list-images">
                            <img src={record?.thumbnail ? record?.thumbnail : 'https://via.placeholder.com/400'} alt={index} className="candidate-list-img" />
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="candidate-list-content mt-3 mt-lg-0">
                            <h5 className="fs-18 mb-2">
                              {record?.name}
                            </h5>
                            <p className="text-muted mb-2">{record.description ? record.description.slice(0, 150) : 'Tour details missing'}...</p>
                            <ul className="list-inline mb-0 text-muted">
                              <li className="list-inline-item"><i className="mdi mdi-map-marker"></i> {record.address}</li>
                              {record.price_type !== 'adult' && (
                                <li className="list-inline-item"><i className="mdi mdi-wallet"></i> ${record.children_price} / per child</li>
                              )}
                              {record.price_type !== 'children' && (
                                <li className="list-inline-item"><i className="mdi mdi-wallet"></i> ${record.adult_price} / per adult</li>
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-2 tour-tags-wrap">
                          <Link className='btn btn-primary pull-right px-4' to={`/cpanel/vendor-detail/${record.vendor_id}/tour/${record.id}/edit`}>Edit</Link>
                        </div>
                      </div>
                      <div className="favorite-icon">
                          <a href="#">
                            <i className="mdi mdi-heart fs-18"></i>
                          </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> 

      
    </>
  );
};

export default TourList;
