import { useEffect, useState } from "react";
import BooksCard from "../components/BooksCard";

const AllBooks = () => {
    const [books, setBooks] = useState([])
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/books`)
          .then(res => res.json())
          .then(data => {
            setBooks(data)
          })
    }, [isDeleted])

    return (
        <div>
            <h4 className="text-center font-bold text-2xl text-secondary space-y-3">All Books</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    books.map(book => <BooksCard key={book._id} book={book} setIsDeleted={setIsDeleted} isDeleted={isDeleted}/>)
                }
            </div>
        </div>
    );
};

export default AllBooks;