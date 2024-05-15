import PropTypes from "prop-types";

const AboutTable = ({ book, idx }) => {
  console.log(book);
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{book?.authName}</td>
      <td>{book?.email}</td>
      <td>{book?.name}</td>
      <td>{book?.category}</td>
    </tr>
  );
};

export default AboutTable;

AboutTable.propTypes = {
  book: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired
};
