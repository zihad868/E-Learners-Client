import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const BookDetails = () => {
  const [returnDate, setReturnDate] = useState(new Date());
  const book = useLoaderData();
  const { user } = useContext(AuthContext);

  const {_id, photo, name, quantity, category, description, rating, authName } =
    book;


  const handleBorrow = () => {
    const today = new Date();
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    const borrowDate = today.toLocaleString("en-US", options);

    const userEmail = user?.email;

    const borrow = {photo,name, category, userEmail, borrowDate, returnDate };
    console.log(borrow);

    fetch(`${import.meta.env.VITE_API_URL}/borrow`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(borrow)
    })

    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Borrowed Book has been added",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(borrow);
        fetch(`${import.meta.env.VITE_API_URL}/book/${_id}`,{
          method: 'PATCH',
          headers: {
              'content-type': 'application/json'
           },
          body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
      }
    })
  };

  return (
    <div>
      <div className="space-y-3 mb-10 grid lg:grid-cols-2">
        <div className="flex justify-center p-3">
          <img className="w-96 h-72" src={photo} alt="" />
        </div>
        <div className="text-xl ml-12">
          <p>Book Name: {name}</p>
          <p>Author: {authName}</p>
          <p>Book Category: {category}</p>
          <div className="grid grid-cols-2 text-xl">
            <p>Quantity: {quantity}</p>
            <p>Rating: {rating}</p>
          </div>
        </div>

        <div className="text-xl font-normal ml-12"></div>
      </div>

      <div className="ml-12">
        <p>Description: {description}</p>
      </div>

      <div className="grid grid-cols-2 mt-4 gap-10">
        <Link to={"/allBooks"} className="flex justify-center items-center">
          <button className="bg-secondary text-white p-2 rounded-md w-full">
            View All Books
          </button>
        </Link>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="bg-sky-400 text-white p-2 rounded-md w-full"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Borrow
        </button>
        <dialog id="my_modal_3" className="modal min-h-fit">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>

              <div className="mt-5">
                <h4 className="text-center text-red-500 font-bold text-xl">
                  {" "}
                  Are You sure wants to borrow book..!
                </h4>
                <label className="text-xl font-bold">
                  <p className="">Name: {user?.displayName}</p>
                  <p className="">Email: {user?.email}</p>
                  <p className="">Book Name: {name}</p>
                </label>

                <div className="text-xl font-bold">
                  <label className="label">
                    <span className="">Return Date</span>
                  </label>
                  <DatePicker
                    selected={returnDate}
                    onChange={(date) => setReturnDate(date)}
                  />
                </div>

                <div className="mt-2 flex items-center justify-center">
                  <button
                    className="bg-sky-400 rounded-xl p-3 w-full"
                    onClick={handleBorrow}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BookDetails;
