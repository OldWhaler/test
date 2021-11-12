// let url = 'https://jsonplaceholder.typicode.com/todos/1'


import { randomFillArray } from './functions.js';

// function render(parent, html, place) {
//   parent.insertAdjacentHTML(place, html);
// }

// const createList = () => {
//   return `<ul class='list'></ul>`;
// };

// const createListElement = (text = 'list element') => {
//   return `<li>${text}</li>`;
// };

// const test = document.querySelector('.test');

// render(test, createList(), 'beforeend');

// const list = document.querySelector('.list');
// console.log(list)

// for (let i = 0; i < 3; i++) {
//   render(list, createListElement(`list element №${i}`), 'beforeend');
// }



/* class Element {
  constructor({ tagName, tagText, tagParent, tagClass, bgColor = 'blue' }) {
    this.tagName = tagName;
    this.tagText = tagText;
    this.tagParent = tagParent;
    this.tagClass = tagClass;
    this.bgColor = bgColor;
  }

  render() {
    let html = `
    <${this.tagName} class = '${this.tagClass}'>
      ${this.tagText}
    </${this.tagName}>`;

    this.tagParent.insertAdjacentHTML('beforeend', html)
  }
}

const obj = {
  tagName: 'div',
  tagText: 'I love my family',
  tagParent: document.querySelector('.wrapper'),
  tagClass: 'element',
}


new Element(obj).render(); */


/* const sleep = ms => {
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}

sleep(3000).then(() => console.log(3000)) */

