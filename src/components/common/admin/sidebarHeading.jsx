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
    heading: 'Subscription',
    icon: <i className="mdi mdi-border-inside"></i>,
    link: 'subscription',
  },
  {
    id: 4,
    heading: 'All Tour List',
    icon: <i className="mdi mdi-border-inside"></i>,
    link: 'tours/listing',
  },
  {
    id: 5,
    heading: 'FAQ',
    icon: <i className="mdi mdi-book"></i>,
    link: 'faq',
  },
  {
    id: 6,
    heading: 'Admin Settings',
    icon: <i className="mdi mdi-settings"></i>,
    link: 'admin-setting',
  },
  {
    id: 7,
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
