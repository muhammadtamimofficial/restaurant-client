import React from 'react';

const Cover = ({ img, title, article }) => {
    return (
        <div
            className="hero h-[600px] text-white"
            style={{
                backgroundImage: `url(${img})`,
            }}>
            <div className="hero-overlay"></div>
            <div className=" flex items-center justify-center text-center bg-slate-800 w-2/3 bg-opacity-60">
                <div className="p-20 ">
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