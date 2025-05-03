import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center justify-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={60}>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque sequi voluptates corrupti illo aliquid magni voluptas nesciunt, atque, autem nemo nihil, molestiae minima? Esse fuga deserunt eius consequuntur debitis?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;