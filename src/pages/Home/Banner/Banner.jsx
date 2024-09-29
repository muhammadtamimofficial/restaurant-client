import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img_1 from '../../../assets/assets/home/01.jpg'
import img_2 from '../../../assets/assets/home/02.jpg'
import img_3 from '../../../assets/assets/home/03.png'
import img_4 from '../../../assets/assets/home/04.jpg'
import img_5 from '../../../assets/assets/home/05.png'
import img_6 from '../../../assets/assets/home/06.png'


const Banner = () => {
    return (
        <div className=''>
            <Carousel>
                <div>
                    <img src={img_1} />
                </div>
                <div>
                    <img src={img_2} />
                </div>
                <div>
                    <img src={img_3} />
                </div>
                <div>
                    <img src={img_4} />
                </div>
                <div>
                    <img src={img_5} />
                </div>
                <div>
                    <img src={img_6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;