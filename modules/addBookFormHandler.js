import * as elements from './elements.js';
import Book from './books.js';
import spaNav from './spaNav.js';
import BooksList from './booksList.js';

export default form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const msg = document.querySelector('.error-message');
  function clear() { msg.innerHTML = ''; }

  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const books = JSON.parse(localStorage.getItem('books')) || [];
  const id = books.length + 1;
  if (title.value === '' || author.value === '') {
    msg.classList.remove('success');
    msg.innerHTML = 'Please enter the book title and author';
    setTimeout(clear, 2000);
  } else {
    const b = new Book(id, title.value, author.value);
    Book.addBook(b);
    form.reset();
    msg.classList.add('success');
    msg.innerHTML = 'The book is added successfully';
    setTimeout(clear, 2000);
    elements.listContainer.innerHTML = '';
    //   Book.displayBooks();
    spaNav(0);
    BooksList();
  }
});