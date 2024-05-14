import { useLoaderData } from "react-router-dom";
import CategoriesBooks from "../components/CategoriesBooks";

const CategoryDetails = () => {
    const books = useLoaderData();

    return (
        <div>
            <h3>Category Details{books.length}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                books.map(book => <CategoriesBooks key={book._id} book={book} />)
            }
            </div>
        </div>
    );
};

export default CategoryDetails;