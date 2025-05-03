import React, { use } from 'react';
import { NavLink } from 'react-router';



const catagorypromis=fetch("/categories.json").then(res=> res.json())

const Categories = () => {
    const catagories = use(catagorypromis);

    return (
        <div>
            <h1 className='font-bold'>All Categories {catagories.length}</h1> 
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    catagories.map(catagori=><NavLink key={catagori.id} className='btn bg-base-100 border-0 hover:bg-base-300' to={`/category/${catagori.id}`}>{catagori.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;