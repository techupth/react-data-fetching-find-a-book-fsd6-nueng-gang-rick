import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  let [search, setSearch] = useState("");
  let [book, setBook] = useState([]);
  let getSearch = async () => {
    let searchs = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );
    setBook(searchs.data.items);
  };
  useEffect(() => {
      getSearch();
  }, [search]);
  let searchBook = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input
        type="text"
        value={search}
        onChange={searchBook}
        placeholder="Search for a book"
      />
      <ul>
      {book.map((item,index) => {
        return (
          
            <li key={index}>{item.volumeInfo.title}</li>
        
        );
      })}
      </ul>
    </div>
  );
}

export default App;


