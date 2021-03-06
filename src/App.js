import React from "react";
import { Bookshelf } from "./components/Bookshelf/Bookshelf";
import { AddBookButton } from "./AddBookButton";
import { SearchBooks } from "./SearchBooks";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Bookshelf />
            <AddBookButton />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
