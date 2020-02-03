import React from "react";
import { Changer } from "../Changer/Changer";
import "./Book.css";

function Book(props) {
  const { thumbnail, title, authors } = props;

  function mapAuthors(author, index) {
    return <p key={index}>{author}</p>;
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnail})`
          }}
        ></div>
        <Changer />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.map(mapAuthors)}</div>
    </div>
  );
}

export default Book;
