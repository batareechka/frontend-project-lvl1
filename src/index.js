import { greetUser, getAnswer } from './cli.js';

const MAX_ROUNDS_COUNT = 3;

const runEngine = (description, generateRound) => {
  const userName = greetUser();
  console.log(description);

  for (let round = 0; round < MAX_ROUNDS_COUNT; round += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
