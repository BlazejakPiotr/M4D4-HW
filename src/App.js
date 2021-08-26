import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";

import Books from "./data/history.json";

import MyBadge from "./components/MyBadge";

function App() {
  return (
    <div className="App">
      <BookList booklist={Books} />
    </div>
  );
}

export default App;
