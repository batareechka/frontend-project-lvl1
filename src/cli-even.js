import readlineSync from 'readline-sync';
import { generateRandomInteger, isEven } from './helpers.js';

const MIN_INTEGER = 0;
const MAX_INTEGER = 100;
const ROUNDS_NUMBER = 3;
let userName;
let correctAnswerCount = 0;

const getUserName = () => readlineSync.question('May I have your name? ');

const playRound = () => {
  let res;
  const randomInteger = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  console.log(`Question: ${randomInteger}`);

  const userAnswer = readlineSync.question('Your answer: ');

  const expectedAnswer = isEven(randomInteger) ? 'yes' : 'no';

  if (userAnswer === expectedAnswer) {
    console.log('Correct!');
    res = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    res = false;
  }
  return res;
};

const initBrainEven = () => {
  console.log('Welcome to the Brain Games!');

  userName = getUserName();

  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswerCount < ROUNDS_NUMBER) {
    if (playRound()) {
      correctAnswerCount += 1;
    } else {
      correctAnswerCount = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default initBrainEven;
