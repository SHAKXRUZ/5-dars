import "./App.css";
// import Routes from "./routes/Routes";

// import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import Car from "./assets/images/car.jpg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    // <header className="header">
    //   <nav className="navbar">
    //     <Link to="/">Home</Link>
    //     <Link to="/shifokor">Shifokor</Link>
    //     <Link to="/news">News</Link>
    //     <Link to="/section">Section</Link>
    //     <Link to="/contact">Contact</Link>
    //   </nav>

    //   <Routes />
    // </header>

    <div className="row">
      <Swiper
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box">
            <img src={Car} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={Car} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={Car} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={Car} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={Car} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={Car} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={Car} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={Car} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={Car} alt="" />
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
