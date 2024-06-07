import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const findBook = async (searchQuery) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.log("Error fetching the books", error);
    }
  };

  useEffect(() => {
    if (query) {
      findBook(query);
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input
        type="text"
        id="find-a-book"
        value={query}
        onChange={handleInputChange}
      />
      <div>
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.volumeInfo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
