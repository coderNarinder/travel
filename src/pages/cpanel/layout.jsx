import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../../components/common/admin/header/header';
import AdminSidebar from '../../components/common/admin/sidebar';
import { postRequest } from '../../service';
import "./../../../public/admin/assets/css/style.min.css";
import "./layout.css";

const AdminLayout = () => { 
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    postRequest(`v1/checkUser`, {})
      .then((res) => {
        if (res.status === 1) { 
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("user", JSON.stringify(res.data)); 
          setIsLogin(true);
        }
      })
      .catch(() => {
        window.location.href = '/cpanel/login';
      })
      .finally(() => {
        console.log("done");
      });
  }, []);

  // State to manage the layout type
  const [isMiniSidebar, setIsMiniSidebar] = useState(false);

  // Function to toggle the layout state
  const toggleSidebar = () => {
    setIsMiniSidebar(!isMiniSidebar);
  };

  return (
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype={isMiniSidebar ? 'mini-sidebar' : 'full'}
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
      className={isMiniSidebar ? 'mini-sidebar' : ''}
    >
      <AdminHeader toggleSidebar={toggleSidebar} />
      <AdminSidebar />
      <div className="page-wrapper">
        {/* <div className="page-breadcrumb">
          <div className="row">
            <div className="col-12 d-flex no-block align-items-center justify-content-between">
              <h4 className="page-title">Dashboard</h4>
              <div className="ms-5 text-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
              </div>
              <button type="button" className="btn btn-primary ms-auto" disabled>Save Changes</button>
            </div>
          </div>
        </div> */}
        <Outlet />
        <footer className="footer text-center">
          All Rights Reserved by Fivvia. Designed and Developed by&nbsp;
          <a href="https://www.Fivvia.com">Fivvia</a>.
        </footer>
      </div>
    </div>
  );
}
export default AdminLayout;