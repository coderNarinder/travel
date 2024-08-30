// import React from 'react';
// import { createBrowserRouter } from 'react-router-dom';

// // Lazy load your components
// const HomeLayout = React.lazy(() => import('../pages/home/layout'));
// const HomePage = React.lazy(() => import('../pages/home/homepage'));
// const NotFound = React.lazy(() => import('../pages/notfound'));
// const ActivityPage = React.lazy(() => import('../pages/activities/ActivityPage'));
// const TrackingPage = React.lazy(() => import('../pages/tracking/TrackingPage'));
// const AdminLayout = React.lazy(() => import('../pages/cpanel/layout'));
// const Dashboard = React.lazy(() => import('../pages/cpanel'));
// const Login = React.lazy(() => import('../pages/cpanel/login'));
// const CreateTour = React.lazy(() => import('../pages/cpanel/tours'));
// const VendorListing = React.lazy(() => import('../pages/cpanel/vendors'));
// const CreateVendor = React.lazy(() => import('../pages/cpanel/vendors/create'));
// const VendorDetail = React.lazy(() => import('../pages/cpanel/vendors/details'));
// const VendorLayout = React.lazy(() => import('../pages/cpanel/vendors/vendorLayout'));
// const TourList = React.lazy(() => import('../pages/cpanel/vendors/tours'));
// const AdminSettings = React.lazy(() => import('../pages/cpanel/settings/AdminSettings'));
// const TourListing = React.lazy(() => import('../pages/cpanel/tours/listing'));
// const Subscription = React.lazy(() => import('../pages/cpanel/subscriptions'));
// const VendorEdit = React.lazy(() => import('../pages/cpanel/vendors/edit'));

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <HomeLayout />,
//         children: [
//             {
//                 path: '',
//                 element: <HomePage />
//             }
//         ]
//     },
//     // Uncomment and configure other routes as needed
//     {
//         path: '/tour/:id/detail',
//         element: <ActivityPage />
//     },
//     {
//         path: '/tracking',
//         element: <TrackingPage />
//     },
//     {
//         path: '/cpanel/login',
//         element: <Login />
//     },
//     {
//         path: "/cpanel",
//         element: <AdminLayout />,
//         children: [
//             {
//                 path: '/cpanel',
//                 element: <Dashboard />
//             },
//             {
//                 path: 'admin-setting',
//                 element: <AdminSettings />
//             },
//             {
//                 path: 'subscription',
//                 element: <Subscription />
//             },
//             {
//                 path: '/cpanel/tours/listing',
//                 element: <TourListing />
//             },
//             {
//                 path: '/cpanel/vendor/listing',
//                 element: <VendorListing />
//             },
//             {
//                 path: '/cpanel/vendor/create',
//                 element: <CreateVendor />
//             },
//             {
//                 path: '/cpanel/vendor-detail/:slug/tour/:id/edit',
//                 element: <CreateTour />
//             },
//             {
//                 path: "/cpanel/vendor-detail",
//                 element: <VendorLayout />,
//                 children: [
//                     {
//                         path: '/cpanel/vendor-detail/:slug/info',
//                         element: <VendorDetail />
//                     },
//                     {
//                         path: '/cpanel/vendor-detail/:slug/edit',
//                         element: <VendorEdit />
//                     },
//                     {
//                         path: '/cpanel/vendor-detail/:slug/tours',
//                         element: <TourList />
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         path: "*",
//         element: <NotFound />,
//     }
// ]);

// export { router };


import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HomeLayout from '../pages/home/layout';
import HomePage from '../pages/home/homepage';
import NotFound from '../pages/notfound';
import ActivityPage from '../pages/activities/ActivityPage';
import TrackingPage from '../pages/tracking/TrackingPage';
import AdminLayout from '../pages/cpanel/layout';
import Dashboard from '../pages/cpanel';
import Login from '../pages/cpanel/login';
import CreateTour from '../pages/cpanel/tours';
import VendorListing from '../pages/cpanel/vendors';
import CreateVendor from '../pages/cpanel/vendors/create';
import VendorDetail from '../pages/cpanel/vendors/details';
import VendorLayout from '../pages/cpanel/vendors/vendorLayout';
import TourList from '../pages/cpanel/vendors/tours';
import AdminSettings from '../pages/cpanel/settings/AdminSettings';
import TourListing from '../pages/cpanel/tours/listing';
import Subscription from '../pages/cpanel/subscriptions';
import VendorEdit from '../pages/cpanel/vendors/edit';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            }
        ]
    },
    {
        path: '/tour/:id/detail',
        element: <ActivityPage />
    },
    {
        path: '/tracking',
        element: <TrackingPage />
    },
    {
        path: '/cpanel/login',
        element: <Login />
    },
    {
        path: "/cpanel",
        element: <AdminLayout />,
        children: [
            {
                path: '/cpanel',
                element: <Dashboard />
            },
            {
                path: 'admin-setting',
                element: <AdminSettings />
            },
            {
                path: 'subscription',
                element: <Subscription />
            },
            {
                path: '/cpanel/tours/listing',
                element: <TourListing />
            },
            {
                path: '/cpanel/vendor/listing',
                element: <VendorListing />
            },
            {
                path: '/cpanel/vendor/create',
                element: <CreateVendor />
            },
            {
                path: '/cpanel/vendor-detail/:slug/tour/:id/edit',
                element: <CreateTour />
            },
            {
                path: "/cpanel/vendor-detail",
                element: <VendorLayout />,
                children: [
                    {
                        path: '/cpanel/vendor-detail/:slug/info',
                        element: <VendorDetail />
                    },
                    {
                        path: '/cpanel/vendor-detail/:slug/edit',
                        element: <VendorEdit />
                    },
                    {
                        path: '/cpanel/vendor-detail/:slug/tours',
                        element: <TourList />
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export { router };
