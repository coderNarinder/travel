import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom'; 
import CreateSlider from '../pages/cpanel/sliders/create';
import EditSlider from '../pages/cpanel/sliders/edit';
import SingleTour from '../pages/home/singletour';

const SliderListing = lazy(() => import('../pages/cpanel/sliders'));

const HomeLayout = lazy(() => import('../pages/home/layout'));
const HomePage = lazy(() => import('../pages/home/homepage'));
const ListPage = lazy(() => import('../pages/home/listPage'));
const NotFound = lazy(() => import('../pages/notfound'));
const ActivityPage = lazy(() => import('../pages/activities/ActivityPage'));
const TrackingPage = lazy(() => import('../pages/tracking/TrackingPage'));
const AdminLayout = lazy(() => import('../pages/cpanel/layout'));
const Dashboard = lazy(() => import('../pages/cpanel'));
const Login = lazy(() => import('../pages/cpanel/login/login'));
const CreateTour = lazy(() => import('../pages/cpanel/tours'));
const VendorListing = lazy(() => import('../pages/cpanel/vendors'));
const CreateVendor = lazy(() => import('../pages/cpanel/vendors/create'));
const VendorDetail = lazy(() => import('../pages/cpanel/vendors/details'));
const VendorLayout = lazy(() => import('../pages/cpanel/vendors/vendorLayout'));
const TourList = lazy(() => import('../pages/cpanel/vendors/tours'));
const OrderList = lazy(() => import('../pages/cpanel/vendors/orders'));
const AdminSettings = lazy(() => import('../pages/cpanel/settings/AdminSettings'));
const TourListing = lazy(() => import('../pages/cpanel/tours/listing'));
const Subscription = lazy(() => import('../pages/cpanel/subscriptions'));
const VendorEdit = lazy(() => import('../pages/cpanel/vendors/edit'));
const FAQ = lazy(() => import('../pages/cpanel/faq'));
const Orders = lazy(() => import('../pages/cpanel/orders'));
const Customers = lazy(() => import('../pages/cpanel/customers'));
const BusinessProfile = lazy(() => import('../pages/cpanel/business-profile'));


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <HomeLayout />
            </Suspense>
        ),
        children: [
            {
                path: '',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <HomePage />
                    </Suspense>
                )
            },
            {
                path: '/list',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ListPage />
                    </Suspense>
                )
            },
            {
                path: '/single-tour',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SingleTour />
                    </Suspense>
                )
            }
        ]
    },
    {
        path: '/tour/:id/detail',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <ActivityPage />
            </Suspense>
        )
    },
    {
        path: '/tracking',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <TrackingPage />
            </Suspense>
        )
    },
    {
        path: '/cpanel/login',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Login />
            </Suspense>
        )
    },
    {
        path: "/cpanel",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <AdminLayout />
            </Suspense>
        ),
        children: [
            {
                path: '/cpanel',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Dashboard />
                    </Suspense>
                )
            },
            {
                path: 'admin-setting',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminSettings />
                    </Suspense>
                )
            },
            {
                path: 'profile',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <BusinessProfile />
                    </Suspense>
                )
            },
            {
                path: 'customers',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Customers />
                    </Suspense>
                )
            },
            {
                path: 'orders',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Orders />
                    </Suspense>
                )
            },
            {
                path: 'faq',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <FAQ />
                    </Suspense>
                )
            },
            {
                path: 'subscription',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Subscription />
                    </Suspense>
                )
            },
            {
                path: '/cpanel/tours/listing',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <TourListing />
                    </Suspense>
                )
            },
            {
                path: '/cpanel/slider/listing',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SliderListing />
                    </Suspense>
                )
            },
            {
                path: '/cpanel/slider/create',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <CreateSlider />
                    </Suspense>
                )
            },
            {
                path: '/cpanel/vendor/listing',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <VendorListing />
                    </Suspense>
                )
            },
            {
                path: '/cpanel/slider/:id/edit',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <EditSlider />
                    </Suspense>
                )
            },
            {
                path: '/cpanel/vendor/create',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <CreateVendor />
                    </Suspense>
                )
            },
            {
                path: '/cpanel/vendor-detail/:slug/tour/:id/edit',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <CreateTour />
                    </Suspense>
                )
            },
            {
                path: "/cpanel/vendor-detail",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <VendorLayout />
                    </Suspense>
                ),
                children: [
                    {
                        path: '/cpanel/vendor-detail/:slug/info',
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <VendorDetail />
                            </Suspense>
                        )
                    },
                    {
                        path: '/cpanel/vendor-detail/:slug/edit',
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <VendorEdit />
                            </Suspense>
                        )
                    },
                    {
                        path: '/cpanel/vendor-detail/:slug/tours',
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <TourList />
                            </Suspense>
                        )
                    },
                    {
                        path: '/cpanel/vendor-detail/:slug/orders',
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <OrderList />
                            </Suspense>
                        )
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
            </Suspense>
        ),
    }
]);

export { router };
