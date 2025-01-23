// write the book component code here
import React from 'react';

const BookCard = ({ title, author, description, coverImage }) => {
    return (
        <div className='book-card'>
            <img src={coverImage} alt={title} />
            <div className='book-details'>
                <h2 className='book-title'>{title}</h2>
                <p className='book-author'>by {author}</p>
                <p className='book-description'>{description}</p>
            </div>
        </div>
    );
};

export default BookCard;