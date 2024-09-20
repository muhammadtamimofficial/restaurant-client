import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import FeaturedImg from '../../../assets/assets/home/featured.jpg'


const Featured = () => {
    return (
        <div className='bg-cover bg-center bg-fixed '
            style={{ backgroundImage: `url(${FeaturedImg})` }}
        >
            <div className='bg-opacity-50 bg-slate-900 text-white   my-10 pt-1'>
                <div>
                    <SectionTitle
                        SubHeading={'Check it out'}
                        Heading={'FROM OUR MENU'}
                        HeadingColor={'text-white'}
                    ></SectionTitle>
                </div>
                <div className={`md:flex justify-center items-center px-24 gap-10 pb-16 `}>
                    <div>
                        <img src={FeaturedImg} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl'>March 20, 2023</h3>
                        <h3 className='text-2xl'>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere,
                            deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium
                            tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="mt-3 btn btn-outline border-b-4 border-black">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;