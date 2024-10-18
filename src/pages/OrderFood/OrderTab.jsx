import React from 'react';
import FoodCard from '../../component/FoodCard';

const OrderTab = (items) => {
    return (
        <div className="md:grid md:grid-cols-3 gap-x-10 gap-y-10 mt-5 w-11/12 mx-auto">
            {
                items.items.map(item =>
                    <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>
                )
            }
        </div>
    );
};

export default OrderTab;