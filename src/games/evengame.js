import runGameEngine, { gameRounds } from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumEven = (questRandomNumber) => questRandomNumber % 2 === 0;

const createRound = () => {
  const question = Math.ceil(Math.random() * 100);
  const correctAnswer = isNumEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEvenGame = () => {
  const rounds = [];
  for (let count = 0; count < gameRounds; count += 1) {
    rounds[count] = createRound();
  }
  return runGameEngine(rounds, gameTask);
};

export default playEvenGame;
