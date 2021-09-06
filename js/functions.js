function randomFillArray(n = 10) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    let randomNum = () => Math.round(Math.random() * 10);
    let elem = randomNum();

    if (Math.random() > 0.5) {
      elem *= 10;
      elem += randomNum();
    }

    arr.push(elem);
  }

  return arr;
}



export { randomFillArray }
