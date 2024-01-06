import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../utils/redux/action";

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((data) => data.books);
  const searchedBook = useSelector((data) => data.searchedBook);

  useEffect(() => {
    if (books.length === 0) {
      axios
        .get("https://reactnd-books-api.udacity.com/books", {
          headers: { Authorization: "whatever-you-want" },
        })
        .then((res) => {
          const data = res.data.books;
          dispatch(fetchData(data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  console.log("books:", books);
  console.log("searchedBook:", searchedBook);

  return (
    <div id="home">
      {books.length !== 0 ? (
        <div className="books-main">
          <div className="booksHeading">Books</div>
          <div className="books-container">
            {books
              .filter((book, index) =>
                book.title.toLowerCase().includes(searchedBook.toLowerCase())
              )
              .map((book, index) => (
                <div className="book" key={index}>
                  <img src={book.imageLinks.thumbnail} alt="" />
                  <div className="book-title">{book.title}</div>
                  <div className="rating">
                    🌟{book.averageRating ? book.averageRating : "3.69"}{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <span style={{ color: "red" }}>Free</span>{" "}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
