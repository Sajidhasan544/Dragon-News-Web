import React from 'react';
import sw from "../assets/swimming.png";
import cl from "../assets/class.png";
import pl from "../assets/playground.png";

const Qzone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h1 className='font-bold mb-4'>QZone</h1>
            <div className="space-y-5">
                <img src={sw} alt="" /><img src={cl} alt="" /><img src={pl} alt="" />
            </div>
        </div>
    );
};

export default Qzone;