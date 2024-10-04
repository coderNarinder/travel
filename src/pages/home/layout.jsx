import { Outlet } from 'react-router-dom';
import Header from '../../components/user/header/Header';
import Footer from '../../components/user/footer/Footer';

import './../../../public/css/bootstrap.min.css';
import './../../../public/css/jquery-ui.min.css';
import './../../../public/css/ace-responsive-menu.css';
import './../../../public/css/menu.css';
import './../../../public/css/fontawesome.css';
import './../../../public/css/flaticon.css';
import './../../../public/css/bootstrap-select.min.css';
import './../../../public/css/animate.css';
import './../../../public/css/slider.css';
import './../../../public/css/style.css';
import './../../../public/css/ud-custom-spacing.css';
import './../../../public/css/responsive.css';
import './layout.scss';

const HomeLayout = () => {
  return (
    <>
      <div className="wrapper ovh">
        <Header />
          <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default HomeLayout;
