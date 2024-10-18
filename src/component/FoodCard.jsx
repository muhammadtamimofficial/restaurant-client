import React from 'react';

const FoodCard = ({ item }) => {
    // price recipe

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={item.image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;