import { useEffect, useState } from "react";
import drama from '../assets/categories/Drama.jpg';
import novel from '../assets/categories//Novel.jpg';
import sciFi from '../assets/categories/Sci-Fi.jpg';
import thriller from '../assets/categories/Thriller.jpg';


const Categories = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log(books);
  return (
    <div className="space-y-3 mt-5">
      <h4 className="text-center font-bold text-2xl text-secondary space-y-3">
        All Categories
      </h4>
      <p className="text-center">
        {" "}
        Category is a broad term referring to general aspects of the book's
        content and audience, such as Novel, Thriller, History, Drama, Sci-Fi
        etc
      </p>
      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="w-full h-52">
              <img
                src={sciFi}
                alt="Sci-Fi"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Drama Books
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>This is a list of Sci-Fi Books and collections of linked short stories.</p>
              <div className="card-actions justify-between">
                <div className="w-full text-center rounded-lg px-1 py-2 bg-secondary text-white">Explore Drama Books Books</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-full bg-base-100 shadow-xl">
          <figure className="w-full h-52">
              <img
                src={thriller}
                alt="Thriller"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Thriller Books
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>This is a list of Thriller and collections of linked short stories.</p>
              <div className="card-actions justify-between">
                <div className="w-full text-center rounded-lg px-1 py-2 bg-secondary text-white">Explore Thriller Books</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-full bg-base-100 shadow-xl">
          <figure className="w-full h-52">
              <img
                src={novel}
                alt="Novel"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Novel Books
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>This is a list of Novel and collections of linked short stories.</p>
              <div className="card-actions justify-between">
                <div className="w-full text-center rounded-lg px-1 py-2 bg-secondary text-white">Explore Novel Books</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-full bg-base-100 shadow-xl">
          <figure className="w-full h-52">
              <img
                src={drama}
                alt="drama"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Drama Books
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>This is a list of drama and collections of linked short stories.</p>
              <div className="card-actions justify-between">
                <div className="w-full text-center rounded-lg px-1 py-2 bg-secondary text-white">Explore Drama Books</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Categories;
