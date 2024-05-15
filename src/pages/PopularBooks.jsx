import { useEffect, useState } from "react";
import PopularBooksCard from "../components/PopularBooksCard";

const PopularBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <div>
      <h4 className="text-center font-bold text-2xl text-secondary space-y-3">
        {" "}
        Popular Books
      </h4>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
          books.filter(book => book.rating > 3).map(book => (
            <PopularBooksCard key={book._id} book={book} />
          ))
        }
      </div>
    </div>
  );
};

export default PopularBooks;
