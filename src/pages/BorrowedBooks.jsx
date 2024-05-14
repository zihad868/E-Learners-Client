import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import BorrowCard from '../components/BorrowCard';

const BorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    const [borrows, setBorrows] = useState([])
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/borrow/${user?.email}`)
           .then(res => res.json())
           .then(data => {
              setBorrows(data)
           })
    }, [user?.email, deleted])

    return (
        <div>
            <h4 className="text-center font-bold text-2xl text-secondary space-y-3">Borrowed Book</h4>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    borrows.map(borrow => <BorrowCard key={borrow._id} borrow={borrow} deleted={deleted} setDeleted={setDeleted}/>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;