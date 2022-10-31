import * as elements from './modules/elements.js';
import spaNav from './modules/spaNav.js';
import BooksList from './modules/booksList.js';
import addBookFormHandler from './modules/addBookFormHandler.js';
import nowDateTime from './modules/nowDate.js';

for (let i = 0; i < elements.linkItem.length; i += 1) {
  elements.linkItem[i].addEventListener('click', () => {
    spaNav(i);
  });
}

BooksList();

setInterval(nowDateTime, 1000);
