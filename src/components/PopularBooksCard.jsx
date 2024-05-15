import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const PopularBooksCard = ({ book }) => {
    console.log(book)
    return (
        <div  className='space-y-3 mb-10'>
            <div className='flex justify-center p-3'>
                <img className='w-96 h-72' src={book?.photo} alt="" />
            </div>
            <div className='text-xl font-bold ml-12'>
                <p>Book Name: {book?.name}</p>
            </div>

            <div className='text-xl font-normal ml-12'>
                <p>Book Category: {book?.category}</p>
            </div>

            <div className='grid grid-cols-2 text-xl ml-12'>
                <p>Quantity: {book?.quantity}</p>
                <p>Rating: {book?.rating}</p>
            </div>
            <div className='ml-12'>
              <p>Description: {book?.description.slice(0, 30)}{'...'}</p>
            </div>
            <div className=''>
              <Link to={`/books/${book?._id}`}><button className='bg-sky-300 p-2 rounded-md w-full'>View Details</button></Link>
            </div>
        </div>
    );
};

export default PopularBooksCard;


PopularBooksCard.propTypes = {
    book: PropTypes.object.isRequired
}