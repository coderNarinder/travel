// import "./header.scss"

export default function Header() {
  return (
    <>
      <header className="header-nav nav-homepage-style stricky main-menu">
        <nav className="posr">
            <div className="container posr menu_bdrt1">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="logos mr40">
                                <a className="header-logo logo1" href="index.html"><img src="images/images/header-logo.png" alt="Header Logo" /></a>
                                <a className="header-logo logo2" href="index.html"><img src="images/images/header-logo2.png" alt="Header Logo" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto ms-auto">
                        <ul id="respMenu" className="ace-responsive-menu ms-auto" data-menu-style="horizontal">
                            <li><a className="list-item" href="#"><span className="title">Social Media</span></a></li>
                            <li><a className="list-item" href="#"><span className="title">Business</span></a></li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex align-items-center">
                            <a className="login-info d-flex align-items-center" href="page-dashboard-add-property.html">
                                <i className="far fa-globe fz16 me-2"></i> <span className="d-none d-xl-block">eng</span>
                            </a>
                            <a className="ud-btn add-property menu-btn mx-2 mx-xl-4" data-bs-toggle="modal" href="#exampleModalToggle" role="button"> Login / Sign Up </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    </>
  )
}
