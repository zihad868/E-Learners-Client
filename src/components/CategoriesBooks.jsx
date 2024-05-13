import PropTypes from 'prop-types';

const CategoriesBooks = ({ book }) => {
    return (
        <div>
            <h3>{book.category}</h3>
        </div>
    );
};

export default CategoriesBooks;

CategoriesBooks.propTypes = {
    book: PropTypes.object.isRequired
}