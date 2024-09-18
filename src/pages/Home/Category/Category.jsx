import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import img_1 from '../../../../src/assets/assets/home/slide1.jpg';
import img_2 from '../../../../src/assets/assets/home/slide2.jpg';
import img_3 from '../../../../src/assets/assets/home/slide3.jpg';
import img_4 from '../../../../src/assets/assets/home/slide4.jpg';
import img_5 from '../../../../src/assets/assets/home/slide5.jpg';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='md:mx-[12%] uppercase text-center   font-bold'>
            <SectionTitle className="text-black"
                SubHeading={"From 11:00am to 10:00pm"}
                Heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={70}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper text-white text-2xl"
            >
                <SwiperSlide><img src={img_1} alt="" />
                    <h3 className='-mt-16 -ml-9 mb-10'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img_2} alt="" />
                    <h3 className='-mt-16 -ml-9'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img_3} alt="" />
                    <h3 className='-mt-16 -ml-9'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img_4} alt="" />
                    <h3 className='-mt-16 -ml-9'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img_5} alt="" />
                    <h3 className='-mt-16 -ml-9 '>Soups</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;