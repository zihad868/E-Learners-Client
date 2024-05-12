// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slider image={slider1} text=' Engaging with a good book can be a form of escapism, offering a temporary break from the stresses of everyday life.'/></SwiperSlide>
        <SwiperSlide><Slider image={slider2} text='Reading exercises the memory muscle, as readers must remember characters, plot details, and key points from the text'/></SwiperSlide>
        <SwiperSlide><Slider image={slider3} text='Exposure to imaginative worlds and creative storytelling can inspire readers to think creatively and explore their own creative pursuits'/></SwiperSlide>
      </Swiper>
    </>
  );
}