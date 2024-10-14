import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import CoverImg from '../../../src/assets/assets/shop/banner2.jpg'

const OrderFood = () => {
    return (
        <div>
            <Cover
                img={CoverImg}
                title={"Order Foods"}
                article={`Would you like to try a dish.`}
            ></Cover>
        </div>
    );
};

export default OrderFood;