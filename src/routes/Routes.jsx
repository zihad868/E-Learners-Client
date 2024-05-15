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
import ErrorPage from "../components/ErrorPage";
import About from "../pages/About";
import PopularBooks from "../pages/PopularBooks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
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
                path: '/popular',
                element: <PopularBooks />
            },
            {
                path: '/allBooks',
                element: <PrivateRoute><AllBooks /></PrivateRoute>
            },
            {
                path: '/books/:id',
                element: <PrivateRoute><BookDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`)
            },
            {
                path: '/bookUpdate/:id',
                element: <PrivateRoute><BookUpdate /></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`)
            },
            {
                path: '/categoryDetails/:id',
                element: <PrivateRoute><CategoryDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/books/category/${params.id}`)
            },
            {
                path: '/borrowedBooks',
                element: <PrivateRoute><BorrowedBooks /></PrivateRoute>,
            },
            {
                path: '/about',
                element: <About />
            },

            {
                path: '/authentication',
                element: <Authentication />,
                children: [
                    {
                        index: true,
                        element: <Signin />
                    },
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