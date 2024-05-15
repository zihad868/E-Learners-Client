import { useEffect, useState } from "react";
import AboutTable from "../components/AboutTable";

const About = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div>
      <h4 className="text-center font-bold text-2xl text-secondary space-y-3"> About Author</h4>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Author Name</th>
                <th>Email</th>
                <th>Books Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {books.map((book, idx) => (
                <AboutTable key={book._id} book={book} idx={idx}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
