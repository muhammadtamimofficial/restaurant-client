import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import QuiteIcon from '../../../assets/assets/quite-icon.png'

const Testimonials = () => {
    const [reviews, Setreviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => Setreviews(data))
    }, [])



    return (
        <div className='md:mb-20 md:mx-10'>
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
                                <div className='flex flex-col items-center text-justify md:mx-auto md:w-8/12'>
                                    <div className=''>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={reviews.rating}
                                            readOnly
                                        />
                                        <img className='w-20 my-3 md:mx-auto' src={QuiteIcon} alt="" />
                                    </div>
                                    <p className=' text-xl text-center'>
                                        {reviews.details}
                                    </p>
                                    <h2 className='text-3xl md:my-3 text-orange-600 font-bold '>
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