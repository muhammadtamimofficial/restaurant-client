import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import img from '../../../../src/assets/assets/menu/banner3.jpg'
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';
import dessertImg from '../../../assets/assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/assets/menu/pizza-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    // console.log(offered);

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
            <MenuCategory
                // img={img}
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
                category={offered}
            ></MenuCategory>
            <MenuCategory
                img={dessertImg}
                title={"DESSERTS"}
                subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                category={offered}
            ></MenuCategory>
            <MenuCategory
                category={pizza}
                img={pizzaImg}
                title={"Pizza"}
                subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            ></MenuCategory>
            <MenuCategory
                category={salad}
                img={saladImg}
                title={"Salad"}
                subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            ></MenuCategory>
            <MenuCategory
                category={soup}
                img={soupImg}
                title={"Soup"}
                subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            ></MenuCategory>
        </div >
    );
};

export default Menu;