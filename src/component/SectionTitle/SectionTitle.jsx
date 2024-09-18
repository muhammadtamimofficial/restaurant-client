import React from 'react';

const SectionTitle = ({ SubHeading, Heading }) => {
    return (
        <div className='md:size-5/12 my-10 font-bold text-center mx-auto'>
            <p className='text-yellow-500 md:text-2xl'>--- {SubHeading} ---</p>
            <h2 className='md:text-6xl	mt-2 border-y-4 py-4 text-pink-600		'>{Heading}</h2>
        </div>
    );
};

export default SectionTitle;