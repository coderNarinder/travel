import React from 'react';

import icons1 from "./../../../../public/images/common/car.png"
import icons2 from "./../../../../public/images/common/tour.png"
import icons3 from "./../../../../public/images/common/camel.png"
import icons4 from "./../../../../public/images/common/food.png"

const TourSection = () => {
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
  ];
  
  return (
    <div className="content-right">
      <div className="featured-list row">
        {featuredTours.map((tour, index) => (
          <div className="col-md-4" key={index}>
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
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668" stroke="" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link active" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5</a></li>
          <li className="page-item"><a className="page-link" href="#">...</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992" stroke="" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TourSection;
