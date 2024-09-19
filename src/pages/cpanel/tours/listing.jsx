import React, { useEffect, useState } from "react";
import { getRequest } from "../../../service";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const TourListing = () => {
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [itemsPerPage, setLimit] = useState(2);
  const [pageCount, setPageCount] = useState(2); 

  console.log(loading);

  useEffect(() => {
    getTours();
  }, []);

  const getTours = () => {
    setLoading(true);
    getRequest(`v1/product/listing?skip=0&limit=20`)
      .then((res) => {
        if (res.status === "success") {
          setRecords(res?.data);
          console.log(res.data);
        }
      })
      .catch(() => alert("Error creating category"))
      .finally(() => {
        setLoading(false);
      });
  };

  const handlePageClick = (event) => {
    
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="justify-content-center row mt-3">
              <div className="col-lg-12">
                <div className="candidate-list-widgets mb-3">
                  <form action="#" className="">
                    <div className="g-2 row">
                      <div className="col-lg-3">
                        <div className="filler-job-form">
                          <i className="uil uil-briefcase-alt"></i>
                          <input
                            id="exampleFormControlInput1"
                            placeholder="Job, Company name..."
                            type="search"
                            className="form-control filler-job-input-box form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="filler-job-form">
                          <i className="uil uil-location-point"></i>
                          <select
                            className="form-select selectForm__inner"
                            data-trigger="true"
                            name="choices-single-location"
                            id="choices-single-location"
                            aria-label="Default select example"
                          >
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="filler-job-form">
                          <i className="uil uil-clipboard-notes"></i>
                          <select
                            className="form-select selectForm__inner"
                            data-trigger="true"
                            name="choices-single-categories"
                            id="choices-single-categories"
                            aria-label="Default select example"
                          >
                            <option value="4">Accounting</option>
                            <option value="1">IT &amp; Software</option>
                            <option value="3">Marketing</option>
                            <option value="5">Banking</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 d-flex">
                        <a
                          className="btn btn-primary ms-1 px-4"
                          href="#"
                        >
                          <i className="uil uil-filter"></i> Filter
                        </a>
                        <a
                          className="btn btn-secondary ms-2 flex-grow-1"
                          href="#"
                        >
                          <i className="uil uil-cog"></i> Advance
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="align-items-center row">
                  <div className="col-lg-8">
                    <div className="mb-3 mb-lg-0">
                      <h6 className="fs-16 mb-0">Showing 1 -0- 8 of 11 results</h6>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="candidate-list-widgets">
                      <div className="row">
                        <div className="col-lg-6">
                          <select
                            className="form-select"
                            data-trigger="true"
                            name="choices-single-filter-orderby"
                            id="choices-single-filter-orderby"
                            aria-label="Default select example"
                          >
                            <option value="df">Default</option>
                            <option value="ne">Newest</option>
                            <option value="od">Oldest</option>
                            <option value="rd">Random</option>
                          </select>
                        </div>
                        <div className="col-lg-6">
                          <select
                            className="form-select"
                            data-trigger="true"
                            name="choices-candidate-page"
                            id="choices-candidate-page"
                            aria-label="Default select example"
                          >
                            <option value="df">All</option>
                            <option value="ne">8 per Page</option>
                            <option value="ne">12 per Page</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="candidate-list">
                   {records && records.map((record, index) => (
                    <div className="candidate-list-box custom-card tour-card mt-4" key={index}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-auto">
                            <div className="candidate-list-images">
                                <img
                                  src={record?.thumbnail ? record?.thumbnail : 'https://via.placeholder.com/400'}
                                  alt=""
                                  className="candidate-list-img"
                                />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="candidate-list-content mt-3 mt-lg-0">
                              <h5 className="fs-18 mb-2">
                                {record?.name}
                              </h5>
                              <p className="text-muted mb-2">
                                {record.description.split(' ').slice(0, 20).join(' ') + (record.description.split(' ').length > 20 ? '...' : '')}
                              </p>
                              <ul className="list-inline mb-0 text-muted">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-map-marker"></i>{" "}
                                  {record?.address}
                                </li>
                                {record?.price_type !== "adult" && (
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-wallet"></i> $
                                    {record?.children_price} / per children
                                  </li>
                                )}
                                {record?.price_type !== "children" && (
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-wallet"></i> $
                                    {record?.adult_price} / per adult
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4 tour-tags-wrap">
                            <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-stretch gap-1">
                              {record?.category.map((cate, index) => (
                                <span
                                  className="badge-new"
                                  key={index}
                                >
                                  {cate}
                                </span>
                              ))}
                              <Link
                                className="btn btn-primary pull-right px-4"
                                to={`/cpanel/vendor-detail/${record?.vendor_id}/tour/${record?.id}/edit`}
                              >
                                Edit
                              </Link>
                            </div>
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
            <div className="row">
              <div className="col-md-12">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourListing;
