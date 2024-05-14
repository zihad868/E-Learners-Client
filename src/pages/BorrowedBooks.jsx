import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const BorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    const [borrows, setBorrows] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/borrow/${user?.email}`)
           .then(res => res.json())
           .then(data => {
              setBorrows(data)
           })
    }, [user?.email])

    console.log(borrows);

    return (
        <div>
            <h4 className="text-center font-bold text-2xl text-secondary space-y-3">Borrowed Book</h4>
            <div>
                
            </div>
        </div>
    );
};

export default BorrowedBooks;