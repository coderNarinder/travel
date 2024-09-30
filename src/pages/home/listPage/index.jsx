import React from 'react'

import './../../../../public/css/bootstrap.min.css';
import './../../../../public/css/jquery-ui.min.css';
import './../../../../public/css/ace-responsive-menu.css';
import './../../../../public/css/menu.css';
import './../../../../public/css/fontawesome.css';
import './../../../../public/css/flaticon.css';
import './../../../../public/css/bootstrap-select.min.css';
import './../../../../public/css/animate.css';
import './../../../../public/css/slider.css';
import './../../../../public/css/style.css';
import './../../../../public/css/ud-custom-spacing.css';
import './../../../../public/css/responsive.css';
import './index.scss';
import { Col, Container, Row } from 'react-bootstrap';
import SidebarFilters from './sidebar';
import TourSection from './toursection';

export default function index() {
  return (
    <>
      <section className='box-section block-banner-tourlist'>
        <Container>
          <Row>
            <Col md={12} className='text-center'>
              <h3>Journey with Travila - Begin Your Story!</h3>
              <h6 className="heading-6-medium">Easily search for top tours offered by our professional network</h6>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='section-tourlist'>
        <Container>
          <div id="link-list" class="tab-filter-wrap mt-4 mb-4">
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link active">Half-day Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Full-day Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Hop on Hop Off Buses<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Multi-day Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">City Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Cultural Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Sightseeing Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Private and Luxury<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Adventure Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Photography Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Safaris<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Night Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Trolly Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Religious Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
          </div>
          <div className='box-content-main'>
            <SidebarFilters/>
            <TourSection/>
          </div>
        </Container>
      </section>

    </>
  )
}
