import React from "react";
import { observer } from "mobx-react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";
import BookForm from "./forms/BookForm";

// Stores
import bookStore from "./stores/bookStore";

const BookList = props => {
  const bookColor = props.match.params.bookColor;
  let books = bookStore.filteredBooks;

  if (bookColor) {
    books = bookStore.getBooksByColor(bookColor);
  }

  return (
    <div>
      <h3>Books</h3>
      <SearchBar store={bookStore} />
      <BookTable books={books} />
    </div>
  );
};

export default observer(BookList);
