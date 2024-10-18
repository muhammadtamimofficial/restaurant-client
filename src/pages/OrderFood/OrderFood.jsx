import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import CoverImg from '../../../src/assets/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../component/FoodCard';

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const dessert = menu.filter(item => item.category === "dessert")
    const drinks = menu.filter(item => item.category === "drinks")
    // console.log(salad);
    return (
        <div>
            <Cover
                img={CoverImg}
                title={"Order Foods"}
                article={`Would you like to try a dish.`}
            ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <div className=" md:gap-7 md:mt-5 md:ml-10">
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </div>
                </TabList>
                <TabPanel>
                    <div className="md:grid md:grid-cols-3 gap-x-10 gap-y-10 mt-5 w-11/12 mx-auto">
                        {
                            salad.map(item =>
                                <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid md:grid-cols-3 gap-x-10 gap-y-10 mt-5 w-11/12 mx-auto">
                        {
                            pizza.map(item =>
                                <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid md:grid-cols-3 gap-x-10 gap-y-10 mt-5 w-11/12 mx-auto">
                        {
                            soup.map(item =>
                                <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid md:grid-cols-3 gap-x-10 gap-y-10 mt-5 w-11/12 mx-auto">
                        {
                            dessert.map(item =>
                                <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid md:grid-cols-3 gap-x-10 gap-y-10 mt-5 w-11/12 mx-auto">
                        {
                            drinks.map(item =>
                                <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;