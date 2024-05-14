import PropTypes from 'prop-types';
import Swal from 'sweetalert2'

const BorrowCard = ({ borrow }) => {

    const handleReturn = (id, borrowId) => {

        fetch(`${import.meta.env.VITE_API_URL}/books/${id}`)
        .then(res => res.json())
        .then(data => {
            fetch(`${import.meta.env.VITE_API_URL}/bookReduce/${id}`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                 },
                body: JSON.stringify(data)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                console.log(borrowId)
                fetch(`${import.meta.env.VITE_API_URL}/deleteBorrow/${borrowId}`, {
                    method: 'DELETE'
                })
                 .then(res => res.json())
                 .then(data => {
                    console.log(data)
                    if (data.deletedCount === 1) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                 })
              })
        })
    }
  return (
    <div>
      <div>
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="w-full h-52">
            <img src={borrow?.photo} alt="Sci-Fi" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Category : {borrow?.category}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Book Name: {borrow?.name}</p>
            <p>Quantity: {borrow?.quantity}</p>
            <p>Borrowed Date: {borrow?.borrowDate}</p>
            <p>Return Date: {borrow?.returnDate}</p>
            <div className="card-actions justify-between">
              <div onClick={() => handleReturn(borrow?.bookId, borrow?._id)} className="w-full text-center rounded-lg px-1 py-2 bg-secondary text-white">
              Return
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowCard;

BorrowCard.propTypes = {
    borrow: PropTypes.object.isRequired
}
