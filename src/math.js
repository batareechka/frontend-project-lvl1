export const generateRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isEven = (number) => number % 2 === 0;

export const findGcd = (num1, num2) => {
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

export const isPrime = (num) => {
  if (num === 1) return false;

  for (let n = Math.floor(num / 2); n > 1; n -= 1) {
    if (num % n === 0) return false;
  }
  return true;
};

export const generateProgression = (a1, d, n) => {
  const progression = [];
  for (let i = 1; i <= n; i += 1) {
    progression[i - 1] = a1 + d * (i - 1);
  }
  return progression;
};
