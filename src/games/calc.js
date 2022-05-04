import runEngine from '../index.js';
import { generateRandomInteger } from '../math.js';

const MIN_INTEGER = 0;
const MAX_INTEGER = 50;
const description = 'What is the result of the expression?';

const mathOperations = ['+', '-', '*'];

const calcMathExpression = (operand1, operand2, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = operand1 + operand2;
      break;

    case '-':
      result = operand1 - operand2;
      break;

    case '*':
      result = operand1 * operand2;
      break;

    default:
      result = null;
  }
  return result;
};

const generateRound = () => {
  const operand1 = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const operand2 = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const operationIndex = generateRandomInteger(0, mathOperations.length - 1);
  const operation = mathOperations[operationIndex];
  const question = `${operand1} ${operation} ${operand2}`;
  const answer = String(calcMathExpression(operand1, operand2, operation));

  return [question, answer];
};

const playBrainCalc = () => {
  runEngine(description, generateRound);
};

export default playBrainCalc;
