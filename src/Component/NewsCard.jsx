import React, { useState } from 'react';

const NewsCard = ({ newit }) => {
    const { title, author, image_url, details, total_view, rating, tags } = newit;
    const formattedDate = new Date(author.published_date).toLocaleDateString();
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    return (
        <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden max-w-2xl mx-auto mb-6">
            <figure>
                <img src={image_url} alt="News" className="w-full h-64 object-cover" />
            </figure>

            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{title}</h2>

                <div className="flex items-center gap-3 mt-2">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-medium">{author.name}</p>
                        <small className="text-gray-500">{formattedDate}</small>
                    </div>
                </div>

                <p className="mt-4 text-gray-700">
                    {readMore ? details : `${details.slice(0, 200)}...`}
                </p>

                <button
                    onClick={toggleReadMore}
                    className="btn btn-sm btn-outline btn-primary mt-2"
                >
                    {readMore ? 'Read Less' : 'Read More'}
                </button>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                    <span><strong>Views:</strong> {total_view}</span>
                    <span><strong>Rating:</strong> {rating.number} ({rating.badge})</span>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <div key={index} className="badge badge-outline badge-secondary">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
