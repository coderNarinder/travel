import React, { useCallback, useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getRequest } from '../../../service';
import VendorContext from './VendorContext';
import "./vendorLayout.css";

function VendorLayout() {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false);
    const [vendor, setVendor] = useState(null);
    const [error, setError] = useState('');

    console.log(vendor, loading);

    const fetchVendorDetails = useCallback(() => {
        setLoading(true);
        getRequest(`v1/vendor/${slug}/details`)
            .then((res) => {
                const data = res.data;
                setVendor(data);
            })
            .catch((e) => {
                console.log(e);
                setError("Error fetching vendor details");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [slug]);

    useEffect(() => {
        fetchVendorDetails();
    }, [fetchVendorDetails]);

    const isoDateString = '2024-08-06T17:44:38.000000Z';
    const date = parseISO(isoDateString);
    const formattedDate = format(date, "d MMMM yyyy, HH:mm");

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <VendorContext.Provider value={vendor}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="container-fluid">
                <div className="row">
                    <div className="col mt-1 mb-1">
                        <div className="alert alert-primary" role="alert">
                            A simple primary alert—check it out!
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="rounded-wrap tour-detail-left">
                            <div className="card">
                                <div className="card-body">
                                    <img src={vendor?.banner || ''} className='w-100 rounded shadow' alt="Vendor Banner" />
                                    <div className="comment-footer mt-3 text-center row">
                                        <div className="col-md-3">
                                            <div className='vendor-logo'>
                                                <img src={vendor?.logo || ''} className='w-100 border' alt="Vendor Logo" />
                                            </div>
                                        </div>
                                        <div className="col-md-9 align-self-center justify-content-end d-flex">
                                            <Link to={`/cpanel/vendor-detail/${slug}/edit`} className="btn btn-cyan text-white mx-1">Edit</Link> 
                                            <button type="button" className="btn btn-secondary text-white mx-1">
                                                Publish
                                            </button>
                                            <button type="button" className="btn btn-danger text-white mx-1">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <h4>{vendor?.name || 'Vendor Name - not-available'}</h4>
                                        <div className='mb-1 font-14'>Vendor slug: {vendor?.slug || 'Vendor slug'}</div>
                                        <div className='mb-1'>Created on: {formattedDate}</div>
                                        <div className='mb-1'>Phone: {vendor?.phone_number || 'not-available'}</div>
                                        <div className='mb-1'>Pincode: {vendor?.pincode || 'not-available'}</div>
                                    </div>
                                </div>
                                <ul className="list-style-none">
                                    <li className="d-flex card-body">
                                        <i className="mdi mdi-check-circle fs-4 w-30px mt-1"></i>
                                        <div>
                                            <div className="mb-0 font-medium p-0">{vendor?.address || 'Address not available'}</div>
                                            <span className="text-muted">
                                                {vendor?.city?.name || 'City not available'}, {vendor?.state?.name || 'State not available'}, {vendor?.country?.name || 'Country not available'}
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                            <div className="tour-tertiary">
                                <Link to={`/cpanel/vendor-detail/${slug}/info`} className={`btn btn-tertiary w-100 ${isActive(`/cpanel/vendor-detail/${slug}/info`) ? 'btn-active' : ''}`}>
                                    <div className="icon icon-left">
                                        <i className="mdi mdi-view-list"></i>
                                    </div>
                                    <div className="text w-100 text-end">
                                        <h4>Details</h4>
                                        <span>General info</span>
                                    </div>
                                </Link>
                                <Link to={`/cpanel/vendor-detail/${slug}/tours`} className={`btn btn-tertiary w-100 ${isActive(`/cpanel/vendor-detail/${slug}/tours`) ? 'btn-active' : ''}`}>
                                    <div className="icon icon-left">
                                        <i className="mdi mdi-airplane"></i>
                                    </div>
                                    <div className="text w-100 text-end">
                                        <h4>Tours</h4>
                                        <span>{vendor?.products_count}+ tours</span>
                                    </div>
                                </Link>
                                <Link to={`/cpanel/vendor-detail/${slug}/orders`} className={`btn btn-tertiary w-100 ${isActive(`/cpanel/vendor-detail/${slug}/orders`) ? 'btn-active' : ''}`}>
                                    <div className="icon icon-left">
                                        <i className="mdi mdi-checkbox-marked-outline"></i>
                                    </div>
                                    <div className="text w-100 text-end">
                                        <h4>Orders</h4>
                                        <span>0+ orders</span>
                                    </div>
                                </Link>
                            </div>
                        <div className="tour-tertiary-wrap">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </VendorContext.Provider>
    );
} 

export default VendorLayout;
