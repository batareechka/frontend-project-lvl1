import { generateRandomInteger, generateProgression } from '../math.js';
import runEngine from '../index.js';

const MIN_INTEGER = 0;
const MAX_INTEGER = 20;
const PROGRESSION_LENGTH = 10;
const MAX_PROGRESSION_STEP = 10;

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const firstNum = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const progressionStep = generateRandomInteger(MIN_INTEGER, MAX_PROGRESSION_STEP);
  const progression = generateProgression(firstNum, progressionStep, PROGRESSION_LENGTH);
  const hiddenElIndex = generateRandomInteger(0, progression.length - 1);
  const answer = String(progression[hiddenElIndex]);
  progression[hiddenElIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const playBrainProgression = () => {
  runEngine(description, generateRound);
};

export default playBrainProgression;
