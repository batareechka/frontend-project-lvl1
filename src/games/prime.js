import runEngine from '../index.js';
import { generateRandomInteger, isPrime } from '../math.js';

const MIN_INTEGER = 1;
const MAX_INTEGER = 50;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const playBrainPrime = () => {
  runEngine(description, generateRound);
};

export default playBrainPrime;
