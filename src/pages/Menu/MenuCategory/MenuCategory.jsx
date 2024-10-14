import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ subHeading, heading, title, subTitle, img, category }) => {
    return (
        <div className='my-20'>
            {
                heading && <SectionTitle
                    SubHeading={subHeading}
                    Heading={heading}
                ></SectionTitle>
            }
            {img &&
                <div className="h-[500px] bg-cover bg-center text-white text-center flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${img})`
                    }}>
                    <div className="px-20 py-16 bg-slate-800 w-2/3 opacity-70">
                        <h1 className='text-3xl font-bold'>{title}</h1>
                        <p>{subTitle}</p>
                    </div>
                </div>}
            <div className='md:mx-20 grid grid-cols-2 mt-10'>
                {
                    category.map(item => <MenuItem
                        key={item._id}
                        name={item.name}
                        recipe={item.recipe}
                        image={item.image}
                        price={item.price}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className="btn my-5 btn-outline border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;