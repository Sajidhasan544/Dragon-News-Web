import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';

const CategoruNews = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const [newss, setNewss] = useState([]);
 
    useEffect(() => {

        if (id == '0') {
            setNewss(data);
            return
        } else if (id == '1') {
            const filterd = data.filter(news => news.others.is_today_pick == true);
            setNewss(filterd)
            return
        } else {
            const filterd = data.filter(news => news.category_id == id);
            setNewss(filterd)
        }

    }, [data, id])


    return (
        <div>
            total {newss.length}
            <div className='grid grid-cols-1'>
                {
                  newss.map((newit) => (<NewsCard key={newit.id} newit={newit}></NewsCard>))  
                }
            </div>

        </div>
    );
};

export default CategoruNews;