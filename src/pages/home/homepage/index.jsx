import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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

const HomePage = () => {
    return (
      <>
        <div className='section-hero'>
          <Container>
          <span class="btn btn-brand-secondary"> <img class="me-2" src="https://travila-demos.vercel.app/assets/imgs/page/homepage4/earth.svg" alt="Travila"/>Explore the World</span>
          <h2 className='heading-2'>Unveil the Beauty <br/> of the World Every Day</h2>
          <h6>Travel Without Limits Browse, Book, Explore</h6>
          </Container>
        </div>
        <div className='section-destination'>
          <Container>
            <h4 className='heading-4 text-center mb-0'>Popular Destinations</h4>
            <p class="text-xl-medium neutral-500 text-center">Navigate the Globe with Confidence</p>
            <div className='mt-4'>
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={5}
                slidesPerView={8}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="card-popular-destination">
                    <div className="card-image">
                      <img src="https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" />
                    </div>
                    <div className="card-info">
                      <a class="text-sm-bold" href="destination.html">Great Wall</a>
                      <p class="text-xs neutral-500">356 Tours</p>
                    </div>
                  </div>
                </SwiperSlide>                
                <SwiperSlide>
                  <div className="card-popular-destination">
                    <div className="card-image">
                      <img src="https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" />
                    </div>
                    <div className="card-info">
                      <a class="text-sm-bold" href="destination.html">Great Wall</a>
                      <p class="text-xs neutral-500">356 Tours</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-popular-destination">
                    <div className="card-image">
                      <img src="https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" />
                    </div>
                    <div className="card-info">
                      <a class="text-sm-bold" href="destination.html">Great Wall</a>
                      <p class="text-xs neutral-500">356 Tours</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-popular-destination">
                    <div className="card-image">
                      <img src="https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" />
                    </div>
                    <div className="card-info">
                      <a class="text-sm-bold" href="destination.html">Great Wall</a>
                      <p class="text-xs neutral-500">356 Tours</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-popular-destination">
                    <div className="card-image">
                      <img src="https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" />
                    </div>
                    <div className="card-info">
                      <a class="text-sm-bold" href="destination.html">Great Wall</a>
                      <p class="text-xs neutral-500">356 Tours</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-popular-destination">
                    <div className="card-image">
                      <img src="https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" />
                    </div>
                    <div className="card-info">
                      <a class="text-sm-bold" href="destination.html">Great Wall</a>
                      <p class="text-xs neutral-500">356 Tours</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-popular-destination">
                    <div className="card-image">
                      <img src="https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" />
                    </div>
                    <div className="card-info">
                      <a class="text-sm-bold" href="destination.html">Great Wall</a>
                      <p class="text-xs neutral-500">356 Tours</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-popular-destination">
                    <div className="card-image">
                      <img src="https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" />
                    </div>
                    <div className="card-info">
                      <a class="text-sm-bold" href="destination.html">Great Wall</a>
                      <p class="text-xs neutral-500">356 Tours</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-popular-destination">
                    <div className="card-image">
                      <img src="https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" />
                    </div>
                    <div className="card-info">
                      <a class="text-sm-bold" href="destination.html">Great Wall</a>
                      <p class="text-xs neutral-500">356 Tours</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-popular-destination">
                    <div className="card-image">
                      <img src="https://travila-demos.vercel.app/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" />
                    </div>
                    <div className="card-info">
                      <a class="text-sm-bold" href="destination.html">Great Wall</a>
                      <p class="text-xs neutral-500">356 Tours</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Container>
        </div>
      </>
    );
}

export default HomePage;
