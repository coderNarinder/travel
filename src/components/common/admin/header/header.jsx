import React from 'react';
import userIcon from "./../../../../assets/user.png";

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
              <li className="nav-item dropdown">
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
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav float-end">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="notification-info">
                    <i className="mdi mdi-settings font-24"></i>
                    <span className="count-notification"></span>
                  </div>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="notification-info">
                    <i className="mdi mdi-bell-outline font-24"></i>
                    <span className="count-notification"></span>
                  </div>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href="#"
                  id="2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="font-24 mdi mdi-comment-processing"></i>
                </a>
                <ul
                  className="
                    dropdown-menu dropdown-menu-end
                    mailbox
                    animated
                    bounceInDown
                  "
                  aria-labelledby="2"
                >
                  <ul className="list-style-none">
                    <li>
                        <a href="#" className="link border-top">
                          <div className="d-flex align-items-center p-3">
                            <span
                              className="
                                btn btn-success btn-circle
                                d-flex
                                align-items-center
                                justify-content-center
                              "
                            >
                              <i className="mdi mdi-calendar text-white fs-4"></i>
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Event today</h5>
                              <span className="mail-desc">Just a reminder that event</span>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="link border-top">
                          <div className="d-flex align-items-center p-3">
                            <span
                              className="
                                btn btn-info btn-circle
                                d-flex
                                align-items-center
                                justify-content-center
                              "
                            >
                              <i className="mdi mdi-settings fs-4"></i>
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Settings</h5>
                              <span className="mail-desc">
                                You can customize this template
                              </span>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="link border-top">
                          <div className="d-flex align-items-center p-3">
                            <span
                              className="
                                btn btn-primary btn-circle
                                d-flex
                                align-items-center
                                justify-content-center
                              "
                            >
                              <i className="mdi mdi-account fs-4"></i>
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Pavan kumar</h5>
                              <span className="mail-desc">Just see the my admin!</span>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="link border-top">
                          <div className="d-flex align-items-center p-3">
                            <span
                              className="
                                btn btn-danger btn-circle
                                d-flex
                                align-items-center
                                justify-content-center
                              "
                            >
                              <i className="mdi mdi-link fs-4"></i>
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Launch Admin</h5>
                              <span className="mail-desc">Just see the my new admin!</span>
                            </div>
                          </div>
                        </a>
                    </li>
                  </ul>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="
                    nav-link
                    dropdown-toggle
                    text-muted
                    waves-effect waves-dark
                    pro-pic
                  "
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
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-account me-1 ms-1"></i> My Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-wallet me-1 ms-1"></i> My Balance
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-email me-1 ms-1"></i> Inbox
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-settings me-1 ms-1"></i> Account Setting
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-power-off me-1 ms-1"></i> Logout
                  </a>
                  <div className="dropdown-divider"></div>
                  <div className="ps-4 p-10">
                    <a
                      href="#"
                      className="btn btn-sm btn-success btn-rounded text-white"
                    >
                      View Profile
                    </a>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
