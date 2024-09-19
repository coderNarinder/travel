import AdminMenu from "./components/AdminMenu";
import { sidebarHeadings } from "./sidebarHeading";

const AdminSidebar = () => {
  return (
    <>
      <aside className="left-sidebar" data-sidebarbg="skin5">
        <div className="navbar-header" data-logobg="skin5">
          <a className="navbar-brand" href="/cpanel">
            
            <span className="logo-text">
              <img
                src="/admin/assets/images/logo-small.png"
                alt="homepage"
                className="light-small"
              />
              <span className="light-logo light-logo-text ms-1">Fivvia Admin</span>
              {/* <img
                src="/admin/assets/images/logo-text.png"
                alt="homepage"
                className="light-logo ms-1"
              /> */}
            </span>
          </a>
        </div>

        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="pt-3">
              {sidebarHeadings.map((menu,index) => (
                <AdminMenu key={index} menuList={menu} />
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
