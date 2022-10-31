import Books from './books.js';
import * as elements from './elements.js';

export default function displayBooks() {
  const books = Books.getBooks();

  books.forEach((book) => {
    const bookMarkup = `<div class="book_list">
        <span class="book_text">"${book.title}" by ${book.author} </span>
        <button class="remove" id=${book.id}>Remove</button>
        </div>`;
    elements.listContainer.innerHTML += bookMarkup;
    const deleteBtn = document.querySelectorAll('.remove');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const res = Books.removeBook(btn.id);
        btn.parentElement.remove();
        if (res) {
          btn.parentElement.remove();
        } else {
          btn.classList.add('disabled');
        }
      });
    });
  });
}