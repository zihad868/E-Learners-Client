import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
    const {_id, photo, name, quantity, category, description, rating} = book;

    console.log(book)
    return (
        <Link to={`/books/${_id}`} className='space-y-3 mb-10'>
            <div className='flex justify-center p-3'>
                <img className='w-96 h-72' src={photo} alt="" />
            </div>
            <div className='text-xl font-bold ml-12'>
                <p>Book Name: {name}</p>
            </div>

            <div className='text-xl font-normal ml-12'>
                <p>Book Category: {category}</p>
            </div>

            <div className='grid grid-cols-2 text-xl ml-12'>
                <p>Quantity: {quantity}</p>
                <p>Rating: {rating}</p>
            </div>
            <div className='ml-12'>
              <p>Description: {description.slice(0, 30)}{'...'}</p>
            </div>
            <div className='flex justify-center items-center'>
              <button className='bg-sky-300 p-2 rounded-md w-full'>View Details</button>
            </div>
        </Link>
    );
};

export default BooksCard;

BooksCard.propTypes = {
    book: PropTypes.object.isRequired
}