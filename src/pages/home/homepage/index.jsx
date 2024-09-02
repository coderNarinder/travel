import React from 'react';

const HomePage = () => {
    return (
        <>
            <div class="body_content_wrapper">
                <section className="home-banner-style1 p0">
                    <div className="home-style1">
                        <div className="container">
                            <div className="row">
                                <div className="col mx-auto">
                                    <div className="inner-banner-style1 text-center">
                                        <h6 className="hero-sub-title animate-up-1">THE BEST WAY TO EXPLORE</h6>
                                        <h2 className="hero-title animate-up-2">Let's see the world together</h2>
                                        <p className="hero-text fz15 animate-up-3">Discover the world's hidden gems and breathtaking landscapes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#explore-property">
                            <div className="mouse_scroll animate-up-4">
                                <img src="images/images/about/home-scroll.png" alt="" />
                            </div>
                        </a>
                    </div>
                </section>

                <section className="p0 search-module">
                    <div className="container">
                        <div className="row">
                        <div className="col mx-auto">
                            <div className="advance-search-tab mt30-md mx-auto animate-up-3">
                            <ul className="nav nav-tabs p-0 m-0" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="tour-tab" data-bs-toggle="tab" data-bs-target="#tour" type="button" role="tab" aria-controls="tour" aria-selected="true">
                                    <img src="images/images/tabs/tab1.png" alt="tab" className="tab-icon" />
                                    Tours
                                </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="tour" role="tabpanel" aria-labelledby="tour-tab">
                                    <div className="advance-content-style3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div id="link-list" className="tab-filter-wrap mb-4">
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link active">Half-day Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Full-day Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Hop on Hop Off Buses<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Multi-day Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">City Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Cultural Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Sightseeing Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Private and Luxury<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Adventure Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Nature and Wildlife<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Water Sports<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Food Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Wine Tasting<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Photography Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Music Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Shopping Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Boat Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Bus Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Historical Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
                                            </div>
                                        </div>
                                        <div className="tabs">
                                            <div className="tab-container">
                                                <div className="tab-filter selected" data-scope="all">All</div>
                                                <div className="tab-filter" data-scope="my-saved">My Saved</div>
                                            </div>
                                        </div>
                                        <div className="filters">
                                            <div className="tab-filter-chip-link">
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Activity</a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Theme</a>
                                                <a href="/Dubai/d828-ttd" className="tab-filter-chip link">Location</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>                    

                <section className="pb90 pb30-md">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="main-title2 text-center">
                            <h2 className="title">Explore Menu</h2>
                            <p className="paragraph">Now you can place your order to enjoy at home, at the office or wherever you like the most, a wide variety of our dishes, in the same way as you can enjoy them in our restaurants.</p>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="feature-style1 mb30">
                            <div className="feature-img"><img className="w-100" src="images/images/listings/city-listing-5.png" alt="" /></div>
                            <div className="feature-content">
                                <div className="top-area">
                                <h6 className="title mb-1">Mountain Climbing</h6>
                                </div>
                                <div className="bottom-area">
                                <a className="ud-btn2" href="list.html">View All<i className="fal fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="feature-style1 mb30">
                            <div className="feature-img"><img className="w-100" src="images/images/listings/city-listing-6.png" alt="" /></div>
                            <div className="feature-content">
                                <div className="top-area">
                                <h6 className="title mb-1">Desert Safari</h6>
                                </div>
                                <div className="bottom-area">
                                <a className="ud-btn2" href="list.html">View All<i className="fal fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="feature-style1 mb30">
                            <div className="feature-img"><img className="w-100" src="images/images/listings/city-listing-7.png" alt="" /></div>
                            <div className="feature-content">
                                <div className="top-area">
                                <h6 className="title mb-1">Sand Skating</h6>
                                </div>
                                <div className="bottom-area">
                                <a className="ud-btn2" href="list.html">View All<i className="fal fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="feature-style1 mb30">
                            <div className="feature-img"><img className="w-100" src="images/images/listings/city-listing-8.png" alt="" /></div>
                            <div className="feature-content">
                                <div className="top-area">
                                <h6 className="title mb-1">Camel Ride</h6>
                                </div>
                                <div className="bottom-area">
                                <a className="ud-btn2" href="list.html">View All<i className="fal fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="feature-style1 mb30">
                            <div className="feature-img"><img className="w-100" src="images/images/listings/city-listing-9.png" alt="" /></div>
                            <div className="feature-content">
                                <div className="top-area">
                                <h6 className="title mb-1">Sea Diving</h6>
                                </div>
                                <div className="bottom-area">
                                <a className="ud-btn2" href="list.html">View All<i className="fal fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-style1 mb30">
                            <div className="feature-img"><img className="w-100" src="images/images/listings/city-listing-10.png" alt="" /></div>
                            <div className="feature-content">
                                <div className="top-area">
                                <h6 className="title mb-1">Sky Diving</h6>
                                </div>
                                <div className="bottom-area">
                                <a className="ud-btn2" href="list.html">View All<i className="fal fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="cta-banner4 d-flex align-items-center" data-stellar-background-ratio="0.1">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-7 mx-auto">
                            <div className="d-block d-sm-flex justify-content-center">                
                            <a href="page-dashboard-add-property.html">
                                <span className="video-icon d-flex align-items-center justify-content-center">
                                    <i className='fa fa-play'></i>
                                </span>
                            </a>
                            </div>
                            <div className="cta-style4 position-relative text-center mt40">
                            <h6 className="sub-title fw400 text-white">Love where you're going</h6>
                            <h1 className="cta-title mb30 text-white">Voyage is a World Leading Online Tours Booking Platform</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="pb40 pb30-md">
  <div className="container">
    <div className="row align-items-md-center">
      <div className="col-lg-9">
        <div className="main-title2 mb-0 mb30">
          <h2 className="title">Trip Ideas</h2>
          <p className="paragraph">Explore our collection of Best Trip idea curated especially for you.</p>
        </div>
      </div>
    </div>
    <div className="row mb20">
      <div className="col-auto px-1">
        <a href="list.html">
          <div className="apartment-category d-flex align-items-center active">
            <span className="icon fa fa-umbrella-beach flex-shrink-0"></span>
            <div className="content flex-shrink-1">
              <h6 className="title mb-0">Romantic</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col-auto px-1">
        <a href="list.html">
          <div className="apartment-category d-flex align-items-center">
            <span className="icon fa fa-umbrella-beach ation flex-shrink-0"></span>
            <div className="content flex-shrink-1">
              <h6 className="title mb-0">Beach</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col-auto px-1">
        <a href="list.html">
          <div className="apartment-category d-flex align-items-center">
            <span className="icon fa fa-umbrella-beach k flex-shrink-0"></span>
            <div className="content flex-shrink-1">
              <h6 className="title mb-0">Friends - Family</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col-auto px-1">
        <a href="list.html">
          <div className="apartment-category d-flex align-items-center">
            <span className="icon fa fa-umbrella-beach  flex-shrink-0"></span>
            <div className="content flex-shrink-1">
              <h6 className="title mb-0">Backpacking</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col-auto px-1">
        <a href="list.html">
          <div className="apartment-category d-flex align-items-center">
            <span className="icon fa fa-umbrella-beach flex-shrink-0"></span>
            <div className="content flex-shrink-1">
              <h6 className="title mb-0">Cultural</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col-auto px-1">
        <a href="list.html">
          <div className="apartment-category d-flex align-items-center">
            <span className="icon fa fa-umbrella-beach  flex-shrink-0"></span>
            <div className="content flex-shrink-1">
              <h6 className="title mb-0">Nature</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col-auto px-1">
        <a href="list.html">
          <div className="apartment-category d-flex align-items-center">
            <span className="icon fa fa-umbrella-beach ouse flex-shrink-0"></span>
            <div className="content flex-shrink-1">
              <h6 className="title mb-0">Pilgrims</h6>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <a href="list.html">
          <div className="position-relative mb40 mb20-md d-flex align-items-center">
            <div className="city-img flex-shrink-0"><img src="images/images/listings/cp-s-1.png" alt="" /></div>
            <div className="flex-shrink-1 ms-3">
              <h6 className="mb-1">New York</h6>
              <p className="mb-0">12 Attractions</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-6 col-lg-3">
        <a href="list.html">
          <div className="position-relative mb40 mb20-md d-flex align-items-center">
            <div className="city-img flex-shrink-0"><img src="images/images/listings/cp-s-2.png" alt="" /></div>
            <div className="flex-shrink-1 ms-3">
              <h6 className="mb-1">Chicago</h6>
              <p className="mb-0">13 Attractions</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-6 col-lg-3">
        <a href="list.html">
          <div className="position-relative mb40 mb20-md d-flex align-items-center">
            <div className="city-img flex-shrink-0"><img src="images/images/listings/cp-s-3.png" alt="" /></div>
            <div className="flex-shrink-1 ms-3">
              <h6 className="mb-1">Manhattan</h6>
              <p className="mb-0">14 Attractions</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-6 col-lg-3">
        <a href="list.html">
          <div className="position-relative mb40 mb20-md d-flex align-items-center">
            <div className="city-img flex-shrink-0"><img src="images/images/listings/cp-s-4.png" alt="" /></div>
            <div className="flex-shrink-1 ms-3">
              <h6 className="mb-1">San Diego</h6>
              <p className="mb-0">15 Attractions</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-6 col-lg-3">
        <a href="list.html">
          <div className="position-relative mb40 mb20-md d-flex align-items-center">
            <div className="city-img flex-shrink-0"><img src="images/images/listings/cp-s-5.png" alt="" /></div>
            <div className="flex-shrink-1 ms-3">
              <h6 className="mb-1">San Francisco</h6>
              <p className="mb-0">16 Attractions</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-6 col-lg-3">
        <a href="list.html">
          <div className="position-relative mb40 mb20-md d-flex align-items-center">
            <div className="city-img flex-shrink-0"><img src="images/images/listings/cp-s-6.png" alt="" /></div>
            <div className="flex-shrink-1 ms-3">
              <h6 className="mb-1">Los Angeles</h6>
              <p className="mb-0">17 Attractions</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-6 col-lg-3">
        <a href="list.html">
          <div className="position-relative mb40 mb20-md d-flex align-items-center">
            <div className="city-img flex-shrink-0"><img src="images/images/listings/cp-s-7.png" alt="" /></div>
            <div className="flex-shrink-1 ms-3">
              <h6 className="mb-1">California</h6>
              <p className="mb-0">18 Attractions</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-6 col-lg-3">
        <a href="list.html">
          <div className="position-relative mb40 mb20-md d-flex align-items-center">
            <div className="city-img flex-shrink-0"><img src="images/images/listings/cp-s-8.png" alt="" /></div>
            <div className="flex-shrink-1 ms-3">
              <h6 className="mb-1">New Jersey</h6>
              <p className="mb-0">19 Attractions</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

                
            </div>
        </>
    );
}

export default HomePage;
