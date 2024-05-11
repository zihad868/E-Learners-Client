import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from '../pages/BorrowedBooks';
import Authentication from "../pages/Authentication/Authentication";
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";

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
                path: '/authentication',
                element: <Authentication />,
                children: [
                    {
                        path: 'signin',
                        element: <Signin />
                    },
                    {
                        path: 'signup',
                        element: <Signup />
                    }
                ]
            }
        ]
    }
])

export default router;