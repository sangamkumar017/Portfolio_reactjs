import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ticket from "../../img/ticket.png";
import Authentication from "../../img/authentication.png"
import Burger from "../../img/burger.png";
import Email from "../../img/email.png";
import Parking from "../../img/parking.png";
import Shopping from "../../img/shopping.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  function handleImageClickburger() {
    window.open('https://github.com/sangamkumar017/The-Burger-Heaven-website', '_blank');
  }
  function handleImageClickshopping() {
    window.open('https://github.com/sangamkumar017/shopping_landing_page', '_blank');
  }
  function handleImageClickemail() {
    window.open('https://github.com/sangamkumar017/Email_tracker', '_blank');
  }
  function handleImageClickticket() {
    window.open('https://github.com/sangamkumar017/Ticket_Management_System', '_blank');
  }
  function handleImageClickautho() {
    window.open('https://github.com/sangamkumar017/Ticket_Management_System', '_blank');
  }
  function handleImageClickparking() {
    window.open('https://github.com/sangamkumar017/Smart_Parking_Spot_Indicator', '_blank');
  }

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={-13}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        
        <SwiperSlide>
          <img src={Burger} alt=""  onClick={handleImageClickburger}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Shopping} alt="" onClick={handleImageClickshopping} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Parking} alt="" onClick={handleImageClickparking}/>
        </SwiperSlide>
        
       
        <SwiperSlide>
          <img src={Authentication} alt=""  style={{ height: '230px' }} onClick={handleImageClickautho} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ticket} alt=""  style={{ height: '230px' }}  onClick={handleImageClickticket} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Email} alt=""  style={{ height: '230px' }} onClick={handleImageClickemail}/>
        </SwiperSlide>
        
     
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
