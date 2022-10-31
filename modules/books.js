import * as elements from './elements.js';

export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static removeBook(id) {
    const books = Book.getBooks();
    let flag = false;
    books.forEach((book, index) => {
      if (book.id === parseInt(id, 10)) {
        books.splice(index, 1);
        flag = true;
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
    return flag;
  }
}
