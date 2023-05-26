/* eslint-disable no-param-reassign */
import runGameEngine, { gameRounds } from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
};

const createRound = () => {
  const number1 = Math.ceil(Math.random() * 100);
  const number2 = Math.ceil(Math.random() * 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  return [question, correctAnswer];
};

const playGcdGame = () => {
  const rounds = [];
  for (let count = 0; count < gameRounds; count += 1) {
    rounds[count] = createRound();
  }
  return runGameEngine(rounds, gameTask);
};

export default playGcdGame;
