import ShowCaseSearch from './ShowCaseSearch';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import showcase1 from '../../assets/img/showcase1.jpg'
import showcase2 from '../../assets/img/showcase2.jpg'
import showcase3 from '../../assets/img/showcase3.jpg'

import 'swiper/css';
import './showcase.scss'

function ShowCase() {
  return (
    <main className="showcase">
            <Swiper
                className='showcase--swiper'
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                speed={5000}
                // autoplay={{
                // delay: 2500,
                // disableOnInteraction: false,
                // }}
                modules={[Autoplay]}
                >
                <SwiperSlide>
                    <img src={showcase1} alt="Vehica" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={showcase2} alt="Vehica" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={showcase3} alt="Vehica" />
                </SwiperSlide>
            </Swiper>

            <h1 className='main--title'>Find Your <span className='main--title-bold'>Perfect</span> Car</h1>

            <ShowCaseSearch />
    </main>
  )
}

export default ShowCase
