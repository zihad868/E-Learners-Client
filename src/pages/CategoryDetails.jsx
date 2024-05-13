import { useLoaderData } from "react-router-dom";
import CategoriesBooks from "../components/CategoriesBooks";

const CategoryDetails = () => {
    const books = useLoaderData();

    console.log(books)
    return (
        <div>
            <h3>Category Details{books.length}</h3>
            {
                books.map(book => <CategoriesBooks key={book._id} book={book} />)
            }
        </div>
    );
};

export default CategoryDetails;