import React from "react";
import { observer } from "mobx-react";
// Components
import BookTable from "./BookTable";
import AddBookModal from "./AddBookModal";

// Stores
import authorStore from "./stores/authorStore";
import bookStore from "./stores/bookStore";

const AuthorDetail = props => {
  const authorID = props.match.params.authorID;
  const author = authorStore.getAuthorById(authorID);
  const authorName = `${author.first_name} ${author.last_name}`;

  // const books = author.books.map(bookID => bookStore.getBookById(bookID)  );
  const books = bookStore.books.filter(book => {
    if (book.authors.find(author => author.id == authorID)) {
      return book;
    }
  });

  return (
    <div>
      <div>
        <h3>{authorName}</h3>
        <img
          src={author.imageUrl}
          className="img-thumbnail img-fluid"
          alt={authorName}
        />
      </div>
      <BookTable books={books} />
      <AddBookModal author={author} />
    </div>
  );
};

export default observer(AuthorDetail);
