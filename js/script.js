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


/* function sum(a, b, c) {
  return a + b + c
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function path(...args2) {
        return curried.apply(this, [...args, ...args2])
      }
    }
  }
}

const a = curry(sum);

console.log(a(1)(2, 3)) */

/* const wife = {
  name: 'Katerina',
  sername: 'Savina',
  age: 32
}

const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify(wife)
});
if (response.ok) {
  console.log(response.ok)
  // console.log(response.headers.get('Content-Type'))
  // for (let [key, value] of response.headers) {
  //   console.log(`${key} : ${value}`)
  // }

  const data = await response.text();
  document.body.insertAdjacentHTML('afterbegin', `<p>${data}</p>`)
} else {
  console.log(response.status)
}
 */
