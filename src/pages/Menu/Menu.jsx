import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../src/assets/assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Restaurant | Menu
                </title>
            </Helmet>
            <Cover
                img={img}
                title={'Our Menu'}
                article={`
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae a nihil cupiditate voluptatibus
                        ducimus illum quidem voluptate magnam officia!`}
            ></Cover>
        </div >
    );
};

export default Menu;