/* eslint-disable react-refresh/only-export-components */
import React from 'react';

const sidebarHeadings = [
  {
    id: 1,
    heading: 'Dashboard',
    icon: <i className="mdi mdi-view-dashboard"></i>,
    link: '/',
  },
  {
    id: 2,
    heading: 'Vendors',
    icon: <i className="mdi mdi-chart-bar"></i>,
    link: 'vendor/listing',
  },
  {
    id: 3,
    heading: 'All Tour List',
    icon: <i className="mdi mdi-airplane"></i>,
    link: 'tours/listing',
  },
  {
    id: 4,
    heading: 'All Users',
    icon: <i className="mdi mdi-account"></i>,
    link: 'users',
  },
  {
    id: 5,
    heading: 'All Orders',
    icon: <i className="mdi mdi-cart-plus"></i>,
    link: 'orders',
  },
  {
    id: 6,
    heading: 'FAQ',
    icon: <i className="mdi mdi-book"></i>,
    link: 'faq',
  },
  {
    id: 7,
    heading: 'Subscription',
    icon: <i className="mdi mdi-check-circle"></i>,
    link: 'subscription',
  },
  {
    id: 8,
    heading: 'Admin Settings',
    icon: <i className="mdi mdi-settings"></i>,
    link: 'admin-setting',
  },
  {
    id: 9,
    heading: 'Logout',
    icon: <i className="mdi mdi-logout"></i>,
    link: '/logout',
  },
  // {
  //   id: 7,
  //   heading: 'Full Width',
  //   icon: <i className="mdi mdi-blur-linear"></i>,
  //   link: 'full-width',
  // },
  // {
  //   id: 8,
  //   heading: 'Form',
  //   icon: <i className="mdi mdi-receipt"></i>,
  //   link: 'form',
  //   children: [
  //     {
  //       id: 9,
  //       heading: 'Form',
  //       icon: <i className="mdi mdi-receipt"></i>,
  //       link: '/form',
  //     },
  //   ],
  // },
];

export { sidebarHeadings };
