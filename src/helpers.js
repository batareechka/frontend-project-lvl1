const generateRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isEven = (number) => number % 2 === 0;

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const isPrime = (num) => {
  if (num === 1) return false;

  for (let n = Math.floor(num / 2); n > 1; n -= 1) {
    if (num % n === 0) return false;
  }
  return true;
};

export {
  generateRandomInteger,
  isEven,
  findGcd,
  isPrime,
};
