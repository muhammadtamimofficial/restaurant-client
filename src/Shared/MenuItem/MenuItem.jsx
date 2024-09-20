import React from 'react';

const MenuItem = ({ name, recipe, image, price }) => {
    return (
        <div className='flex gap-3 my-4'>
            <img style={{ borderRadius: '0 300px 300px 300px' }} className='w-[100px]' src={image} alt="" />
            <div className="description">
                <h2>{name}</h2>
                <p>{recipe}</p>
            </div>
            <p className='pr-3 text-orange-600'>${price}</p>
        </div>
    );
};

export default MenuItem;