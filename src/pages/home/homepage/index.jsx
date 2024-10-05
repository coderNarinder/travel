import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AdvancedSearch from '../../../components/user/search';
import 'swiper/css';
import './index.scss';

const popularDestinations = [
  { title: "Great Wall", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage3/Colosseum.png", tours: 356, activities: 220 },
  { title: "Grand Canyon", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage3/GrandCanyon.png", tours: 256, activities: 180 },
  { title: "Eiffel Tower", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage3/eiffel-tower.png", tours: 412, activities: 52 },
  { title: "Machu Picchu", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage3/MachuPicchu.png", tours: 220, activities: 412 },
  { title: "Statue of Liberty", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage3/StatueofLiberty.png", tours: 180, activities: 65 },
  { title: "Grand Canyon", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage3/GrandCanyon.png", tours: 256, activities: 356 },
  { title: "Eiffel Tower", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage3/eiffel-tower.png", tours: 412, activities: 71 },
  { title: "Great Wall", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png", tours: 356, activities: 256 },
];

const featuredTours = [
  {
    title: "California Sunset/Twilight Boat Cruise",
    img: "https://travila-demos.vercel.app/assets/imgs/page/tour/tour.png",
    label: "25% Off",
    price: "$48.25",
    duration: "2 days 3 nights",
    guests: "4-6 guests",
    rating: 4.96,
    reviews: 672,
  },
  {
    title: "Los Angeles Complete City Tour And Camping",
    img: "https://travila-demos.vercel.app/assets/imgs/page/tour/tour2.png",
    label: "Top Attraction",
    price: "$65.00",
    duration: "1 day",
    guests: "1-8 guests",
    rating: 4.8,
    reviews: 350,
  },
  {
    title: "Napa Valley Wine Tour and City Tour",
    img: "https://travila-demos.vercel.app/assets/imgs/page/tour/tour3.png",
    label: "Wine Lover's Dream",
    price: "$120.00",
    duration: "1 day",
    guests: "2-10 guests",
    rating: 4.9,
    reviews: 150,
  },
  {
    title: "Yosemite National Park Tour and City Tour",
    img: "https://travila-demos.vercel.app/assets/imgs/page/tour/tour4.png",
    label: "Nature's Marvel",
    price: "$99.99",
    duration: "2 days 1 night",
    guests: "2-6 guests",
    rating: 4.85,
    reviews: 400,
  },
  {
    title: "San Francisco Bay Cruise and City Tour",
    img: "https://travila-demos.vercel.app/assets/imgs/page/tour/tour5.png",
    label: "Scenic Experience",
    price: "$45.00",
    duration: "2 hours",
    guests: "1-20 guests",
    rating: 4.7,
    reviews: 220,
  },
  {
    title: "Golden Gate Park Bike Tour and City Tour",
    img: "https://travila-demos.vercel.app/assets/imgs/page/tour/tour6.png",
    label: "Fun on Wheels",
    price: "$30.00",
    duration: "3 hours",
    guests: "1-10 guests",
    rating: 4.8,
    reviews: 180,
  },
  {
    title: "California Sunset/Twilight Boat Cruise",
    img: "https://travila-demos.vercel.app/assets/imgs/page/tour/tour7.png",
    label: "Top Rated",
    price: "$48.25",
    duration: "2 days 3 nights",
    guests: "4-6 guests",
    rating: 4.96,
    reviews: 672,
  },
  {
    title: "California Sunset/Twilight Boat Cruise",
    img: "https://travila-demos.vercel.app/assets/imgs/page/tour/tour8.png",
    label: "Best Sale",
    price: "$48.25",
    duration: "2 days 3 nights",
    guests: "4-6 guests",
    rating: 4.96,
    reviews: 672,
  },
];

const destinations = [
  { 
    title: "Sea Diving", 
    img: "https://travila-demos.vercel.app/assets/imgs/page/homepage6/destination.png", 
    locations: 34, 
    availability: "All year", 
    duration: "3-4 hours" 
  },
  { 
    title: "Rowing", 
    img: "https://travila-demos.vercel.app/assets/imgs/page/homepage6/destination2.png", 
    locations: 65, 
    availability: "All year",
    duration: "1-2 hours" 
  },
  { 
    title: "Bungee Jump", 
    img: "https://travila-demos.vercel.app/assets/imgs/page/homepage6/destination3.png", 
    locations: 41, 
    availability: "All year",
    duration: "30 minutes" 
  },
  { 
    title: "Sky Diving", 
    img: "https://travila-demos.vercel.app/assets/imgs/page/homepage6/destination4.png", 
    locations: 71, 
    availability: "All year",
    duration: "5-6 hours" 
  },
  { 
    title: "Camel Ride", 
    img: "https://travila-demos.vercel.app/assets/imgs/page/homepage6/destination.png", 
    locations: 69, 
    availability: "All year",
    duration: "2-3 hours" 
  },
  { 
    title: "Snow Boarding", 
    img: "https://travila-demos.vercel.app/assets/imgs/page/homepage6/destination2.png", 
    locations: 27, 
    availability: "All year",
    duration: "3-5 hours" 
  },
  { 
    title: "Desert Safari", 
    img: "https://travila-demos.vercel.app/assets/imgs/page/homepage6/destination3.png", 
    locations: 52, 
    availability: "All year",
    duration: "4-6 hours" 
  },
  { 
    title: "Sand Skating", 
    img: "https://travila-demos.vercel.app/assets/imgs/page/homepage6/destination4.png", 
    locations: 84, 
    availability: "All year",
    duration: "2-3 hours" 
  }
];


import offer1 from './../../../../public/offer-1.png';
import offer2 from './../../../../public/offer-2.png';
import offer3 from './../../../../public/offer-3.png';

const offers = [
  { id: 1, img: offer1, alt: "Travila Offer 1" },
  { id: 2, img: offer2, alt: "Travila Offer 2" },
  { id: 3, img: offer3, alt: "Travila Offer 3" },
  { id: 4, img: offer1, alt: "Travila Offer 1" },
  { id: 5, img: offer2, alt: "Travila Offer 2" },
  { id: 6, img: offer3, alt: "Travila Offer 3" },
];

const slidesData = [
  {
    id: 1,
    imageUrl: "https://tripoetic.com/assets/img/blog/my-travel-banner.jpg",
    heading: "Unveil the Beauty of the World",
    subheading: "Explore diverse cultures and stunning landscapes around the globe.",
    buttonLabel: "Explore the World",
  },
  {
    id: 2,
    imageUrl: "https://www.travelwithnature.in/data1/images/1-winter.jpg",
    heading: "Discover New Destinations and Memories",
    subheading: "Adventure awaits in the great outdoors, ready for exploration.",
    buttonLabel: "Join the Journey",
  },
  {
    id: 3,
    imageUrl: "https://sd2.tourism.gov.in/images/slider/slider2.jpg",
    heading: "Experience Thrilling Adventures Everywhere",
    subheading: "Embark on thrilling journeys from mountains to ocean depths.",
    buttonLabel: "Join the Journey",
  },
  {
    id: 4,
    imageUrl: "https://www.nitworldwideholidays.com/vietnam-tour-packages/img/golden-bridge-bana-hills.jpg",
    heading: "Explore Enchanting Landscapes and Gems",
    subheading: "Discover breathtaking views and picturesque locations worldwide.",
    buttonLabel: "Join the Journey",
  },
];

import icons1 from "./../../../../public/images/common/car.png"
import icons2 from "./../../../../public/images/common/tour.png"
import icons3 from "./../../../../public/images/common/camel.png"
import icons4 from "./../../../../public/images/common/food.png"

const galleryData = [
  { id: 1, src: 'https://travila-demos.vercel.app/assets/imgs/page/homepage1/news2.png', },
  { id: 2, src: 'https://travila-demos.vercel.app/assets/imgs/page/homepage1/news.png', },
  { id: 3, src: 'https://travila-demos.vercel.app/assets/imgs/page/homepage1/news3.png', },
  { id: 4, src: 'https://travila-demos.vercel.app/assets/imgs/page/homepage5/tour.png', },
  { id: 5, src: 'https://travila-demos.vercel.app/assets/imgs/page/homepage5/tour2.png', },
  { id: 6, src: 'https://travila-demos.vercel.app/assets/imgs/page/homepage5/tour3.png', }
];

const whyus = [
  { title: "Security Assurance", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage2/security.svg", desc: "Demonstrates commitment to user data security through encryption and secure payment practices", locations: 34, availability: "All year round", duration: "3-4 hours" },
  { title: "Security Assurance", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage2/support.svg", desc: "Demonstrates commitment to user data security through encryption and secure payment practices", locations: 65, availability: "March to November", duration: "1-2 hours" },
  { title: "Security Assurance", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage2/policy.svg", desc: "Demonstrates commitment to user data security through encryption and secure payment practices", locations: 41, availability: "April to October", duration: "30 minutes" },
  { title: "Security Assurance", img: "https://travila-demos.vercel.app/assets/imgs/page/homepage2/repu.svg", desc: "Demonstrates commitment to user data security through encryption and secure payment practices", locations: 71, availability: "All year round", duration: "5-6 hours" },
];

const events = [
  {
    id: 1,
    title: 'Venice Carnival',
    locations: 'Venice, Italy',
    imageUrl: 'https://travila-demos.vercel.app/assets/imgs/page/homepage4/spot.png',
    link: 'destination-4.html',
  },
  {
    id: 2,
    title: 'Fête de la Musique',
    locations: 'Paris, France',
    imageUrl: 'https://travila-demos.vercel.app/assets/imgs/page/homepage4/spot2.png',
    link: 'destination-4.html',
  },
  {
    id: 3,
    title: 'Notting Hill Carnival',
    locations: 'London, UK',
    imageUrl: 'https://travila-demos.vercel.app/assets/imgs/page/homepage4/spot3.png',
    link: 'destination-4.html',
  },
  {
    id: 4,
    title: 'Rome Film Festival',
    locations: 'Rome, Italy',
    imageUrl: 'https://travila-demos.vercel.app/assets/imgs/page/homepage4/spot4.png',
    link: 'destination-4.html',
  },
  {
    id: 5,
    title: 'Macy’s Thanksgiving Day Parade',
    locations: 'New York, USA',
    imageUrl: 'https://travila-demos.vercel.app/assets/imgs/page/homepage4/spot5.png',
    link: 'destination-4.html',
  },
  {
    id: 6,
    title: 'Tokyo Cherry Blossom Festival',
    locations: 'Tokyo, Japan',
    imageUrl: 'https://travila-demos.vercel.app/assets/imgs/page/homepage4/spot6.png',
    link: 'destination-4.html',
  },
  {
    id: 7,
    title: 'Sydney New Year’s Eve Fireworks',
    locations: 'Sydney, Australia',
    imageUrl: 'https://travila-demos.vercel.app/assets/imgs/page/homepage4/spot7.png',
    link: 'destination-4.html',
  },
  {
    id: 8,
    title: 'Dubai Shopping Festival',
    locations: 'Dubai, UAE',
    imageUrl: 'https://travila-demos.vercel.app/assets/imgs/page/homepage4/spot8.png',
    link: 'destination-4.html',
  },
];


const HomePage = () => {
    return (
      <>
        <Swiper 
          navigation={true} 
          modules={[Navigation, Autoplay]} 
          autoplay={{
            delay: 7000,
            disableOnInteraction: false
          }}
          speed={1500}
          className="mySwiper"
        >
          {slidesData.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className='section-hero' style={{
                backgroundImage: `url(${slide.imageUrl})`,
              }}>
                <Container className='text-center'>
                  <h2 className='heading-2'>{slide.heading}</h2>
                  <h6 className='heading-6'>{slide.subheading}</h6>
                  <span className="btn btn-brand-secondary">
                    <img className="me-2" src="https://travila-demos.vercel.app/assets/imgs/page/homepage4/earth.svg" alt="Travila" />
                    {slide.buttonLabel}
                  </span>
                </Container>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <AdvancedSearch/>

        <div className='section-destination'>
          <Container>
            <h4 className='heading-4 text-center mb-0'>Popular Destinations</h4>
            <p className="text-xl-medium neutral-500 text-center">Navigate the Globe with Confidence</p>
            <div className='mt-4 position-relative'>
              <span id="swiper-destination-prev" className="swiper-btn swiper-button-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#000000">
                  <path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" stroke="" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={2}
                navigation={{
                  nextEl: '#swiper-destination-next',
                  prevEl: '#swiper-destination-prev',
                }}
                breakpoints={{
                  640: {
                    width: 640,
                    slidesPerView: 4,
                  },
                  1366: {
                    width: 1366,
                    slidesPerView: 6.8,
                  },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {popularDestinations.map((destination, index) => (
                  <SwiperSlide key={index}>
                    <div className="card-popular-destination">
                      <div className="card-image">
                        <img src={destination.img} alt={destination.title} />
                      </div>
                      <div className="card-info">
                        <a className="text-sm-bold" href="destination.html">{destination.title}</a>
                        <p className="text-xs neutral-500">{destination.activities} Activities</p>
                        <p className="text-xs neutral-500">{destination.tours} Tours</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <span id="swiper-destination-next" className="swiper-btn swiper-button-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#000000">
                  <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </div>
          </Container>
        </div>

        <section className="section-events">
          <Container>
            <Row className='align-items-center'>
              <Col className='col-12 col-md-10'>
                <h4 className='heading-4 mb-0'>Events to explore in your City</h4>
                <p className="text-xl-medium neutral-500">Discover unforgettable experiences with our curated tours.</p>
              </Col>
              <Col className='col-12 col-md-2 text-start text-md-end'>
                <a class="btn btn-black-lg" href="#">View More 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </Col>
            </Row>

            <div className="box-list-events">
              {events.map(event => (
                <div className="card-event">
                  <div className="event-image">
                    <a href={event.link}>
                      <img src={event.imageUrl} alt={event.title} />
                    </a>
                  </div>
                  <div className="card-info background-card">
                    <div className="card-left">
                      <div className="card-title">
                        <a className="text-lg-bold neutral-1000" href={event.link}>
                          {event.title}
                        </a>
                      </div>
                      <div className="card-desc">
                        <a className="text-sm neutral-500" href={event.link}>
                          {event.locations}
                        </a>
                      </div>
                    </div>
                    <div className="card-right">
                      <div className="card-button">
                        <a href={event.link}>
                          Read more
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke='#000' xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <div className='section-featured'>
          <Container>
          <Row className='align-items-center'>
              <Col className='col-12 col-md-10'>
                <h4 className='heading-4 mb-0'>Our Featured Tours</h4>
                <p className="text-xl-medium neutral-500">Favorite destinations based on customer reviews</p>
              </Col>
              <Col className='col-12 col-md-2 text-start text-md-end'>
                <a class="btn btn-black-lg" href="#">View More 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </Col>
            </Row>
            <Tabs transition={false} id="tab-featured-list" className='mt-3'>
              <Tab eventKey="Honeymoon" title="Honeymoon"></Tab>
              <Tab eventKey="profile" title="Adventure"></Tab>
              <Tab eventKey="nature" title="Nature View"></Tab>
              <Tab eventKey="Sands" title="Marina Bay Sands"></Tab>
              <Tab eventKey="Back Packer" title="Back Packer"></Tab>
              <Tab eventKey="Desert Safari" title="Desert Safari"></Tab>
              <Tab eventKey="Wildlife Safari" title="Wildlife Safari"></Tab>
              <Tab eventKey="City Sightseeing" title="City Sightseeing"></Tab>
              <Tab eventKey="Pilgrim Tour" title="Pilgrim Tour"></Tab>
            </Tabs>
            <div className="featured-list row">
              {featuredTours.map((tour, index) => (
                <div className="col-md-3" key={index}>
                  <div className="featured-tour">
                    <div className="card-image">
                      <a className={`label ${tour.label.replace(/\s/g, '').toLowerCase()}`} href="#">{tour.label}</a>
                      <a className="wish" href="#">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </a>
                      <img src={tour.img} alt="featured one" />
                    </div>
                    <div className="card-info"> 
                      <div className="card-rating"> 
                        <div className="card-left"> </div>
                        <div className="card-right"> <span className="rating">{tour.rating} <span className="text-sm-medium neutral-500">({tour.reviews})</span></span></div>
                      </div>
                      <div className="icons">
                        <img src={icons1} alt="Car" />
                        <img src={icons2} alt="Tour" />
                        <img src={icons3} alt="Camel" />
                        <img src={icons4} alt="Food" />
                      </div>
                      <div className="card-title"> <a className="heading-6 neutral-1000" href="#">{tour.title}</a></div>
                      <div className="card-desc">
                        <p>Experience the desert safari in the morning! Morning Desert Safari is perfect for tourists and includes dune bashing...</p>
                      </div>
                      <div className="card-program"> 
                        <div className="card-duration-tour"> 
                          <p className="icon-duration text-md-medium neutral-500">{tour.duration}</p>
                          <p className="icon-guest text-md-medium neutral-500">{tour.guests}</p>
                        </div>
                        <div className="endtime"> 
                          <div className="card-price"> 
                            <h6 className="heading-6 neutral-1000">{tour.price}</h6>
                            <p className="text-md-medium neutral-500">/ person</p>
                          </div>
                          <div className="card-button"> <a className="btn btn-gray" href="#">Book Now</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>

        <div className='section-activities'>
          <Container>
            <Row className='align-items-center'>
              <Col className='col-12 col-md-10'>
                <h4 className='heading-4 mb-0'>Exciting Tour Activities</h4>
                <p className="text-xl-medium neutral-500">Discover unforgettable experiences with our curated tours.</p>
              </Col>
              <Col className='col-12 col-md-2 text-start text-md-end'>
                <a class="btn btn-black-lg" href="#">View More 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </Col>
            </Row>
            <Row className='mt-4'>
              {destinations.map((destination, index) => (
                <Col lg={3} sm={6} key={index}>
                  <a href="#!" className="card-popular card-top-destination">
                    <div className="card-image">
                      <img src={destination.img} alt={destination.title} />
                    </div>
                    <div className="card-info">
                      <span className="card-title">{destination.title}</span>
                      <div className="card-meta">
                        <span className="text-tour">{destination.locations} Locations</span>
                        <div className="card-button">
                          <a href="#">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <p className='mb-0'>Availibility: {destination.availability}</p>
                      <p className='mb-0'>Duration: {destination.duration}</p>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div className='section-offer'>
          <Container>
            <h4 className='heading-4 text-center mb-0'>Exclusive Offers</h4>
            <p className="text-xl-medium neutral-500 text-center">Discover Amazing Deals on Your Next Adventure</p>
            <div className='mt-4 position-relative'>
              <span id="swiper-offer-prev" className="swiper-btn swiper-button-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#000000">
                  <path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" stroke="" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                  nextEl: '#swiper-offer-next',
                  prevEl: '#swiper-offer-prev',
                }}
                breakpoints={{
                  640: {
                    width: 640,
                    slidesPerView: 2,
                  },
                  1600: {
                    width: 1366,
                    slidesPerView: 4.57,
                  },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {offers.map(offer => (
                  <SwiperSlide key={offer.id} className='section-offer-img'>
                    <img src={offer.img} alt={offer.alt} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <span id="swiper-offer-next" className="swiper-btn swiper-button-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#000000">
                  <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </div>
          </Container>
        </div>

        <section className='section-gallery'>
          <Container>
            <h4 className="heading-4 text-center my-1">Tour Gallery</h4>
            <p class="text-xl-medium text-center neutral-500">Discover how you can offset your adventure's carbon emissions <br /> and support the sustainable initiatives practiced by our operators worldwide.</p>
            <Row className='mt-4'>
              {galleryData.map((image) => (
                <Col key={image.id} xs={12} sm={6} md={4} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={image.src} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className='section-gallery'>
          <Container>
            <h2 className="heading-4 text-center my-1">Why Travel With Us?</h2>
            <p class="text-xl-medium text-center neutral-500">The best booking platform you can trust</p>
            <Row className='mt-4'>              
              {whyus.map((whyus, index) => (
                <Col xs={12} sm={6} md={3} className="mb-4" key={index}>
                  <Card className={`card-why-travel background-${index + 1} hover-up`}>
                    <div className="card-image">
                      <img src={whyus.img} alt={whyus.title} />
                    </div>
                    <div className="card-info">
                      <a className="text-xl-bold card-title" href="#">
                        {whyus.title}
                      </a>
                      <p className="text-sm-medium neutral-500 card-desc">
                        {whyus.desc}
                      </p>
                      <a className="text-sm-medium card-link" href="#">
                        Learn More 
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" stroke="" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </a>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

      </>
    );
}

export default HomePage;
