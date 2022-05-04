import runEngine from '../index.js';
import { generateRandomInteger, isEven } from '../math.js';

const MIN_INTEGER = 0;
const MAX_INTEGER = 100;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const playBrainEven = () => {
  runEngine(description, generateRound);
};

export default playBrainEven;
