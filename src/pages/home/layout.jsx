import { Outlet } from 'react-router-dom';
import Header from '../../components/user/header/Header';
import Footer from '../../components/user/footer/Footer';

const HomeLayout = () => {
  return (
    <div className="lt_container">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout;
