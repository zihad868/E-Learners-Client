import { useEffect, useState } from "react";
import BooksCard from "../components/BooksCard";

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [available, setAvailable ] = useState(false);

    console.log(available)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/books`)
          .then(res => res.json())
          .then(data => {
            setBooks(data)
          })
    }, [isDeleted])

    const handleShow = () => {
        setAvailable(!available)
    }

    
    return (
        <div>
            <h4 className="text-center font-bold text-2xl text-secondary space-y-3">All Books</h4>
            <div className="flex justify-center items-center">
                 <button onClick={handleShow} className="btn font-bold text-2xl text-white bg-sky-400 space-y-3">Show Available Books</button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {!available ?
                <>
                {
                    books.map(book => <BooksCard key={book._id} book={book} setIsDeleted={setIsDeleted} isDeleted={isDeleted} available={available} setAvailable={setAvailable}/>)
                }
                </> : 

                <>
                 {
                    books.filter(book => book?.quantity > 0).map(book => <BooksCard key={book._id} book={book} setIsDeleted={setIsDeleted} isDeleted={isDeleted} available={available} setAvailable={setAvailable}/>)
                }
                </>
                }

                
            </div>
        </div>
    );
};

export default AllBooks;