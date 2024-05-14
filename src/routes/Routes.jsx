import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from '../pages/BorrowedBooks';
import Authentication from "../pages/Authentication/Authentication";
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import BookDetails from "../pages/BookDetails";
import BookUpdate from "../pages/BookUpdate";
import CategoryDetails from "../pages/CategoryDetails";

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
                element: <PrivateRoute><AddBook /></PrivateRoute>
            },
            {
                path: '/allBooks',
                element: <PrivateRoute><AllBooks /></PrivateRoute>
            },
            {
                path: '/books/:id',
                element: <BookDetails />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`)
            },
            {
                path: '/bookUpdate/:id',
                element: <BookUpdate />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`)
            },
            {
                path: '/categoryDetails/:id',
                element: <CategoryDetails />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/books/category/${params.id}`)
            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks />,
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