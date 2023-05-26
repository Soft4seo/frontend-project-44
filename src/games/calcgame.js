import runGameEngine, { gameRounds } from '../index.js';

const gameTask = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = Math.ceil(Math.random() * operators.length - 1);
  return operators[randomOperator];
};

const calculating = (operator, number1, number2) => {
  switch (operator) {
    case '*':
      return number1 * number2;
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return Error('Wrong operator');
  }
};

const createRound = () => {
  const number1 = Math.ceil(Math.random() * 100);
  const number2 = Math.ceil(Math.random() * 100);
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculating(operator, number1, number2));
  return [question, correctAnswer];
};

const playCalcGame = () => {
  const rounds = [];
  for (let count = 0; count < gameRounds; count += 1) {
    rounds[count] = createRound();
  }
  return runGameEngine(rounds, gameTask);
};

export default playCalcGame;
