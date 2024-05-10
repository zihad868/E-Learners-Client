import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from '../pages/BorrowedBooks';
import Signin from "../pages/Signin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/addBook',
                element: <AddBook />
            },
            {
                path: '/allBooks',
                element: <AllBooks />
            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks />
            },
            {
                path: '/signin',
                element: <Signin />
            }
        ]
    }
])

export default router;