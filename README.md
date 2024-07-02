

## Website Name:- E-Learners
The Online E-Library System allows users to read, borrow, and manage books online. It features an "Available Books" button to display books in stock, category filtering, and highlights popular books with ratings above four. Users can borrow and return books, which adjusts their quantity. Only authenticated users can add, update, or delete books, with changes managed via a MongoDB server. Borrowed books are user-specific, and login is available through email or Google. Error handling includes a 404 page for wrong URLs.

## Live Link
- https://librarymanagement-eed8e.web.app
  
## Features and characteristics
-  Click one category and data show based on the category
-  Only Authentic users can add books
-  View button display book data fetch from API
-  Update button update data MongoDB server
-  Delete button remove the book from database
-  Borrowed Books routes only users can view their borrowed books
- Login with Email and Google Account
- Wrong URL visit display page not found

## npm package
- React Datepicker
- Sweetalert 
- Swiper slider
- React Hook form
- Firebase

  ## selected category:  
- Novel,
- Thriller,
- Drama,
- Sci-Fi.

  ## Clone and Run Local
-  first clone client
-  command npm install
-  setup firebase configuration in the .env file

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
