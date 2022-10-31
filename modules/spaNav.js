import * as elements from './elements.js';

export default function spaNav(i) {
  elements.addBookContainer.style.display = 'none';
  elements.contactContainer.style.display = 'none';
  elements.bookListContainer.style.display = 'none';
  elements.linkItem[i].classList.add('active');

  if (i === 1) {
    elements.addBookContainer.style.display = 'flex';
  } else if (i === 2) {
    elements.contactContainer.style.display = 'flex';
  } else {
    elements.bookListContainer.style.display = 'flex';
  }
}
