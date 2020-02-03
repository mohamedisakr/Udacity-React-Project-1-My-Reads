import React from "react";
import Book from "../book/Book";
import * as BooksAPI from "../../BooksAPI";

export class Bookshelf extends React.Component {
  bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" }
  ];

  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAllAsync().then(books => {
      this.setState({ books: books });
    });
  }

  render() {
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books
                  .filter(book => book.shelf === "currentlyReading")
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        id={book.id}
                        thumbnail={book.imageLinks.thumbnail}
                        title={book.title}
                        authors={book.authors}
                      ></Book>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books
                  .filter(book => book.shelf === "wantToRead")
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        id={book.id}
                        thumbnail={book.imageLinks.thumbnail}
                        title={book.title}
                        authors={book.authors}
                      ></Book>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books
                  .filter(book => book.shelf === "read")
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        id={book.id}
                        thumbnail={book.imageLinks.thumbnail}
                        title={book.title}
                        authors={book.authors}
                      ></Book>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
