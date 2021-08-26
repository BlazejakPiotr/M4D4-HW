import SingleBook from "./SingleBook";
// import books from "../data/history.json";

const BookList = ({ booklist }) => {
  return booklist.map((book) => <SingleBook singleBook={book} />);
};
export default BookList;
