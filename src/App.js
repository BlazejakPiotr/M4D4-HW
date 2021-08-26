import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";
import FilterBookList from "./components/FilterBookList";
import BookList from "./components/BookList";

import Books from "./data/history.json";

import MyBadge from "./components/MyBadge";

function App() {
  return (
    <div className="App">
      <WarningSign message="Hello, this is working" />
      <MyBadge text="Strive Badge" color="primary" />
      <SingleBook singleBook={Books[0]} />
      <BookList booklist={Books} />
      <FilterBookList />
    </div>
  );
}

export default App;
