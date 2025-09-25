import React from 'react';
const PRCards = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto text-center flex md:flex-row flex-col gap-4 justify-between items-center text-white'>
                <div className="w-[50%] bg-[#422AD5] bg-[url('../../assets/vector1.png')] h-[250px] my-5 flex flex-col justify-center items-center">
                    <p>In-Progress</p>
                    <h3>0</h3>
                </div>
                <div className='w-[50%] bg-[#00827A] h-[250px] my-5 flex flex-col justify-center items-center'>
                    <p>Resolved</p>
                    <h3>0</h3>
                </div>
            </div>
        </>
    );
};

export default PRCards;