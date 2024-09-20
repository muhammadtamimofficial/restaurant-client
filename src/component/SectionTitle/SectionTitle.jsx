import React from 'react';

const SectionTitle = ({ SubHeading, Heading, HeadingColor }) => {
    return (
        <div className='md:size-4/12 my-24 font-bold text-center mx-auto'>
            <p className='text-yellow-500 md:text-xl'>--- {SubHeading} ---</p>
            <h2 className={`md:text-4xl	mt-2 border-y-4 py-4 ${HeadingColor}`}>{Heading}</h2>
        </div>
    );
};

export default SectionTitle;