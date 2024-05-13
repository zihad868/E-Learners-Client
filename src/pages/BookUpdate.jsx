import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const BookUpdate = () => {
    const book = useLoaderData();
    const { user } = useContext(AuthContext);
    const {_id, photo, name, quantity, authName, category, description, rating} = book;
    const [selectedCategory, setCategory] = useState(category)

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleUpdateBook = (e) => {
        e.preventDefault();

        const photo = e.target.photo.value;
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const authName = e.target.authName.value;
        const rating = e.target.rating.value;
        const category = selectedCategory;
        const description = e.target.description.value;
        const email = user?.email;

        const updateBook = {photo, name, quantity, authName, category, description, rating, email};

        fetch(`${import.meta.env.VITE_API_URL}/updateBook/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount == 1){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Update Book Success",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        e.target='';
    }

    return (
        <div>
         <h2 className="text-center font-bold text-2xl text-secondary space-y-3">Update Book</h2>
        <form onSubmit={handleUpdateBook} className="w-3/4 mx-auto border-2 mt-3">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-5">
            <div className="p-3">
              <label className="label">
                <span className="label-text">Book Image</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Book Photo URL"
                className="input input-bordered w-full"
              />
            </div>

            <div className="p-3">
              <label className="label">
                <span className="label-text">Book Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Book Name"
                className="input input-bordered w-full"
              />
            </div>

          </div>

          <div className="p-3">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                defaultValue={description}
                name="description"
                placeholder="Book Description"
                className="input input-bordered w-full"
              />
            </div>
  
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-5">
            <div className="p-3">
              <label className="label">
                <span className="label-text">Book Quantity </span>
              </label>
              <input
                type="number"
                defaultValue={quantity}
                name="quantity"
                placeholder="Book Quantity"
                className="input input-bordered w-full"
              />
            </div>
  
            <div className="p-3">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                name="authName"
                defaultValue={authName}
                placeholder="Author Name"
                className="input input-bordered w-full"
              />
            </div>
  
            <div className="p-3">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className="select w-full" defaultValue={selectedCategory} onChange={handleCategory}>
                <option disabled selected>
                  Select Category
                </option>
                <option value='Novel'>Novel</option>
                <option value='Thriller'>Thriller</option>
                <option value='History'>History</option>
                <option value='Drama'>Drama</option>
                <option value='Sci-Fi'>Sci-Fi</option>
              </select>
            </div>
  
  
            <div className="p-3">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                defaultValue={rating}
                min={1}
                max={5}
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </div>
  
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Update Book</button>
          </div>
        </form>
      </div>
    );
};

export default BookUpdate;