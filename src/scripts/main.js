'use strict';

const listCollection = document.querySelectorAll('li');

for (const li of listCollection) {
  if (li.childNodes.length > 1) {
    const liText = li.firstChild.textContent;

    li.firstChild.textContent = '';

    const span = document.createElement('span');

    span.textContent = liText;
    li.insertBefore(span, li.firstChild);
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childUl = e.target.parentNode.querySelector('ul');

  if (childUl) {
    childUl.hidden = !childUl.hidden;
  }
});
