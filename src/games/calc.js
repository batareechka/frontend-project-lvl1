import readlineSync from 'readline-sync';
import {
  analyzeAnswer, askQuestion, initGame,
} from '../index.js';
import { generateRandomInteger } from '../helpers.js';

const MIN_INTEGER = 0;
const MAX_INTEGER = 50;
const MAIN_RULE = 'What is the result of the expression?';

const generateExpression = () => {
  const expressionObj = {};
  const mathOperations = ['+', '-', '*'];
  const operand1 = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const operand2 = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const operationIndex = generateRandomInteger(0, mathOperations.length - 1);
  expressionObj.question = `${operand1} ${mathOperations[operationIndex]} ${operand2}`;

  switch (mathOperations[operationIndex]) {
    case '+':
      expressionObj.result = operand1 + operand2;
      break;

    case '-':
      expressionObj.result = operand1 - operand2;
      break;

    case '*':
      expressionObj.result = operand1 * operand2;
      break;

    default:
      expressionObj.result = 'Result can not be calculated';
  }

  return expressionObj;
};

const playRound = () => {
  const expression = generateExpression();
  console.log(askQuestion(expression.question));

  const userAnswer = Number(readlineSync.question('Your answer: '));
  const expectedAnswer = expression.result;
  const feedback = analyzeAnswer(userAnswer, expectedAnswer);
  console.log(feedback);

  return userAnswer === expectedAnswer;
};

const playBrainCalc = () => {
  initGame(MAIN_RULE, playRound);
};

export default playBrainCalc;
