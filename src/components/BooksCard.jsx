import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const BooksCard = ({ book, setIsDeleted, isDeleted }) => {
    const {_id, photo, name, quantity, category, description, rating} = book;

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "Want to remove book!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`${import.meta.env.VITE_API_URL}/deleteBook/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount == 1) {
                  Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Book Successfully Removed",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  setIsDeleted(!isDeleted);
                }
              });
          }
        });
      };
    
    return (
        <div  className='space-y-3 mb-10'>
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
            <div className='grid grid-cols-3 gap-2'>
              <Link to={`/books/${_id}`}><button className='bg-sky-300 p-2 rounded-md w-full'>View Details</button></Link>
              <Link to={`/bookUpdate/${_id}`}><button className='bg-purple-400 p-2 rounded-md w-full'>Update</button></Link>
              <button onClick={() => handleDelete(_id)} className='bg-red-400 p-2 rounded-md w-full'>Delete</button>
            </div>
        </div>
    );
};

export default BooksCard;

BooksCard.propTypes = {
    book: PropTypes.object.isRequired
}