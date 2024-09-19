import React from 'react';
import userIcon from "./../../../../assets/user.png";
import { Link } from 'react-router-dom';

export default function AdminHeader({ toggleSidebar }) {
  return (
    <>
      <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
          <div
            className="navbar-collapse collapse"
            id="navbarSupportedContent"
            data-navbarbg="skin5"
          >
            <ul className="navbar-nav float-start me-auto">
              <li className="nav-item d-none d-lg-block">
                <a
                  className="nav-link sidebartoggler waves-effect waves-light"
                  onClick={toggleSidebar}
                >
                  <i className="mdi mdi-menu font-24"></i>
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="d-none d-md-flex gap-1 align-items-center">
                    Create New <i className="fa fa-angle-down"></i>
                  </span>
                  <span className="d-block d-md-none">
                    <i className="fa fa-plus"></i>
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Add Vendor</a></li>
                  <li><a className="dropdown-item" href="#">Add Tour</a></li>
                </ul>
              </li> */}
            </ul>
            <ul className="navbar-nav float-end">
              <li className="nav-item">
                <Link to="/cpanel/admin-setting" className="nav-link">
                  <div className="notification-info">
                    <i className="mdi mdi-settings font-24"></i>
                    <span className="count-notification"></span>
                  </div>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="#!" className="nav-link">
                  <div className="notification-info">
                    <i className="mdi mdi-bell-outline font-24"></i>
                    <span className="count-notification"></span>
                  </div>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="#!" className="nav-link">
                  <div className="notification-info">
                    <i className="font-24 mdi mdi-comment-processing"></i>
                  </div>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={userIcon}
                    alt="user"
                    className="rounded-circle"
                    width="31"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end user-dd animated"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="/cpanel/profile" className="dropdown-item">
                    <i className="mdi mdi-account me-1 ms-1"></i> My Profile
                  </Link>
                  <Link to="#!" className="dropdown-item">
                    <i className="mdi mdi-wallet me-1 ms-1"></i> Balance Sheet
                  </Link>
                  <Link to="#!" className="dropdown-item">
                    <i className="mdi mdi-email me-1 ms-1"></i> Inbox
                  </Link>
                  <Link to="/cpanel/admin-setting" className="dropdown-item">
                    <i className="mdi mdi-settings me-1 ms-1"></i> Account Setting
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/cpanel/logout" className="dropdown-item">
                    <i className="fa fa-power-off me-1 ms-1"></i> Logout
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
