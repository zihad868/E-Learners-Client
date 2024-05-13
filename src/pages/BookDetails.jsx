import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();

  const {
    photo,
    name,
    quantity,
    category,
    description,
    rating,
    authName,
  } = book;

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
          <p>
            Description: {description}
          </p>
        </div>

      <Link to={'/allBooks'} className="flex justify-center items-center">
          <button className="bg-secondary text-white p-2 rounded-md w-full">
            View All Books
          </button>
        </Link>
    </div>
  );
};

export default BookDetails;
