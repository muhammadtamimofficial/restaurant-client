import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews, Setreviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => Setreviews(data))
    }, [])



    return (
        <div className='md:my-20 md:mx-10'>
            <SectionTitle
                Heading={'TESTIMONIALS'}
                SubHeading={'What Our Clients Say'}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(reviews =>
                            <SwiperSlide
                                key={reviews._id}
                            >
                                <div className=' justify-center items-center text-justify md:mx-auto md:w-8/12'>
                                    <div>

                                    </div>
                                    <p className=' text-xl text-center'>
                                        {reviews.details}
                                    </p>
                                    <h2 className='text-3xl md:my-3 text-orange-600 font-bold text-center'>
                                        {reviews.name}
                                    </h2>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;