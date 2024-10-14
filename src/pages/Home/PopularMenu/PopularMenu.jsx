import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")
    // const [menu, Setmenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const PopularItem = data.filter(item => item.category === "popular")
    //             Setmenu(PopularItem);
    //             // console.log(PopularItem);
    //         });

    // }, [])
    return (
        <div>
            <div>
                <SectionTitle
                    SubHeading={"Check it out"}
                    Heading={"FROM OUR MENU"}
                ></SectionTitle>
                <div className='md:mx-20 grid grid-cols-2'>
                    {
                        popular.map(item => <MenuItem
                            key={item._id}
                            name={item.name}
                            recipe={item.recipe}
                            image={item.image}
                            price={item.price}
                        ></MenuItem>)
                    }
                </div>
            </div>
            <div className='text-center'>
                <button className="btn my-5 btn-outline border-b-4 border-black">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;