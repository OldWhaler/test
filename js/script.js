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


//absent-vowel from ================================= codewars

/* function absentVowel(x) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < vowels.length; i++) {
    if (x.indexOf(vowels[i]) == -1) return i
  }
} */

//get-the-middle-character from ================================= codewars

/* function getMiddle(s) {
  if (s.length === 1) return s

  return s.length % 2 === 0 ? `${s[s.length / 2 - 1]}${s[s.length / 2]}` : s[Math.floor(s.length / 2)]
}
 */

//highest-and-lowest from ================================= codewars

/* function highAndLow(numbers) {
  const arr = numbers.split(' ').sort((a, b) => a - b)
  return `${arr[arr.length - 1]} ${arr[0]}`
} */

//jaden-casing-strings from ================================= codewars

/* function test(str) {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
} */

//disemvowel-trolls from ================================= codewars

/* function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
} */

//isograms from ========================================== codewars

/* function isIsogram(str) {
  const letters = str.toLowerCase().split('').sort()

  for (let i = 0; i < letters.length - 1; i++) {
    if (letters[i] === letters[i + 1]) return false
  }
  return true
}
//or
function isIsogram(str) {
  return str.length === new Set(str.toLowerCase()).size
} */

//nickname-generator ========================================== codewars

/* function nicknameGenerator(name) {
  if (name.length < 4) return "Error: Name too short"

  return "aeiou".includes(name[2]) ? name.slice(0, 4) : name.slice(0, 3)
} */

//digits-explosion ========================================== codewars

/* function explode(s) {
  return s.split('').map(char => char.repeat(char)).join('')
} */

//handshake-problem ========================================== codewars

/* function getParticipants(handshakes) {
  if (handshakes === 0) return 1

  let numberOfPeople = 1
  while (true) {
    const maxHandshakes = numberOfPeople * (numberOfPeople - 1) / 2 //calculate the maximum number of handshakes

    if (maxHandshakes >= handshakes) return numberOfPeople

    numberOfPeople++
  }
} */

//reverse-or-rotate ========================================== codewars

/* function revrot(str, sz) {
  if (str === '' || sz <= 0 || sz > str.length) return ''

  let result = ''

  while (str.length >= sz) {
    const chunk = str.slice(0, sz)

    const modifiedChunkSum = chunk.split('').map(num => num ** 3).reduce((sum, cur) => sum += cur, 0)

    result += modifiedChunkSum % 2 === 0 ? chunk.split('').reverse().join('') : chunk.slice(1) + chunk.slice(0, 1)

    str = str.slice(sz)
  }

  return result
} */

//multiples-of-3-or-5 ========================================== codewars

/* function solution(number) {
  let result = 0

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) result += i
  }

  return result
} */

//head-tail-init-and-last ========================================== codewars

/* function head(arr) {
  return arr[0]
}
function tail(arr) {
  return arr.slice(1)
}
function init(arr) {
  return arr.slice(0, arr.length - 1)
}
function last(arr) {
  return arr[arr.length - 1]
} */

//array-deep-count ========================================== codewars

/* function deepCount(a) {
  let result = a.length

  a.forEach(elem => {
    if (Array.isArray(elem)) result += deepCount(elem)
  })

  return result
} */

//valid-string ========================================== codewars

/* function validWord(dictionary, word) {
  return new RegExp(`^(${dictionary.join('|')})+?$`).test(word);
}; */

//sorting-by-bits ========================================== codewars

/* function sortByBit(arr) {
  function getNumberOfBits(num) {
    return num.toString(2).split('').reduce((sum, cur) => sum += +cur, 0)
  }

  const result = arr.sort((a, b) => {
    const numberOfBitsA = getNumberOfBits(a)
    const numberOfBitsB = getNumberOfBits(b)

    if (numberOfBitsA === numberOfBitsB) return a - b
    return numberOfBitsA - numberOfBitsB
  })

  return result
} */

//can-you-keep-a-secret ========================================== codewars

/* function createSecretHolder(secret) {
  return {
    getSecret: () => secret,
    setSecret: (val) => secret = val
  }
} */

//the-coupon-code ========================================== codewars

/* function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) return false

  return new Date(currentDate) - new Date(expirationDate) < 0
} */

//unlucky-days ========================================== codewars

/* function unluckyDays(year) {
  let count = 0;
  for (let i = 0; i < 12; i++) {
    const date = new Date(year, i, 13)
    if (date.getDay() === 5) count++
  }
  return count
} */

//human-readable-duration-format ========================================== codewars

/* function formatDuration(seconds) {
  if (seconds === 0) return "now"

  const timeUnits = ['second', 'minute', 'hour', 'day', 'year']
  let arr = []

  // fill arr with the values of time units
  for (let i = 0; i < 5; i++) {
    if (i < 2) {
      arr.push(seconds % 60)
      seconds = (seconds - (seconds % 60)) / 60
    }
    if (i === 2) {
      arr.push(seconds % 24)
      seconds = (seconds - (seconds % 24)) / 24
    }
    if (i === 3) {
      arr.push(seconds % 365)
      seconds = (seconds - (seconds % 365)) / 365
    }
    if (i === 4) {
      arr.push(seconds)
    }
  }

  // add unit of time names and 's' if the unit of time is used in plural
  arr = arr.map((elem, i) => {
    if (elem > 0) {
      elem = elem + ' ' + timeUnits[i] + `${elem > 1 ? 's' : ''}`
    }
    return elem
  })

  // remove time unit value if 0
  arr = arr.filter(elem => elem != 0)

  //separate by a comma and a space (", "). Except the last component, which is separated by " and "
  if (arr.length > 1) {
    arr = arr.map((elem, i) => {
      if (i === 0) elem = ' and ' + elem
      if (i > 1) elem += ', '
      return elem
    })
  }

  return arr.reverse().join('') //reverse array to right way and join elements
} */

//mylanguages ========================================== codewars

/* function myLanguages(results) {
  return Object.entries(results)
    .filter(elem => elem[1] >= 60)
    .sort((a, b) => b[1] - a[1])
    .map(elem => elem[0])
} */

//run-length-encoding ========================================== codewars

/* const runLengthEncoding = function (str) {
  const arr = []
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push(str.slice(index, i + 1))
      index = i + 1
    }
  }

  return arr.map(elem => [elem.length, elem[0]])
} */
//or
// const runLengthEncoding = function (str) {
//   return (str.match(/(.)\1*/g) || []).map(elem => [elem.length, elem[0]])
// }

//urban-dictionary ========================================== codewars

/* const WordDictionary = function () {
  this.set = new Set()
};

WordDictionary.prototype.addWord = function (word) {
  this.set.add(word)
};

WordDictionary.prototype.search = function (word) {
  const reg = new RegExp(`^${word}$`)
  for (let value of this.set) {
    if (reg.test(value)) return true
  }
  return false
}; */


//convert-a-linked-list-to-a-string ========================================== codewars

/* function stringify(list) {
  if (!list) return "null"

  return list.next ? list.data + ' -> ' + stringify(list.next) : list.data + ' -> null'
} */

//fun-with-trees-array-to-tree ========================================== codewars

/* function arrayToTree(array, index = 0) {
  if (index >= array.length) return;

  return new TreeNode(array[index], arrayToTree(array, 2 * index + 1), arrayToTree(array, 2 * index + 2))
} */

//

//n-th-fibonacci ========================================== codewars

/* function nthFibo(n) {
  if (n === 1) return 0;

  let a = 0, b = 1
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b]
  }
  return b
} */

//length-of-missing-array ========================================== codewars

/* function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0

  const lengths = []
  for (let arr of arrayOfArrays) {
    if (arr === null || arr.length === 0) return 0
    lengths.push(arr.length)
  }

  lengths.sort((a, b) => a - b)
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i + 1] - lengths[i] != 1) return lengths[i] + 1
  }
} */

//pair-of-gloves ========================================== codewars

/* function numberOfPairs(gloves) {
  if (gloves.length < 2) return 0

  const map = new Map()
  gloves.forEach(color => {
    map.has(color) ? map.set(color, map.get(color) + 1) : map.set(color, 1)
  })

  let result = 0;
  for (let value of map.values()) {
    result += value % 2 === 0 ? value / 2 : (value - 1) / 2
  }
  return result
} */

//javascript-mathematician ========================================== codewars

/* function calculate(...numbers) {
  return (...secondNumbers) => [...numbers, ...secondNumbers].reduce((sum, cur) => sum += cur, 0)
} */

//lets-recycle ========================================== codewars

/* function recycle(array) {
  const materials = ['paper', 'glass', 'organic', 'plastic']

  return array.reduce((result, obj) => {
    const i = materials.indexOf(obj.material)
    result[i].push(obj.type)

    if ('secondMaterial' in obj) {
      const j = materials.indexOf(obj.secondMaterial)
      result[j].push(obj.type)
    }
    return result
  }, [[], [], [], []])
} */









