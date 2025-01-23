// write the book component code here
import React from 'react';

const BookCard = ({ image, name, author, genre }) => {
    return (
        <div className='book-card'>
            <img src={image} alt={name} />
            <div className='book-details'>
                <h2 className='book-title'>{name}</h2>
                <p className='book-author'>by {author}</p>
                <p className='book-description'>{genre}</p>
            </div>
        </div>
    );
};

export default BookCard;