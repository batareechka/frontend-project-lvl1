const generateRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isEven = (number) => number % 2 === 0;

export {
  generateRandomInteger,
  isEven,
};
