import React from 'react';

const Cover = ({ img, title, article }) => {
    return (
        <div
            className="hero h-[400px] uppercase"
            style={{
                backgroundImage: `url(${img})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">
                        {article}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;