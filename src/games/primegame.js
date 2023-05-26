import runGameEngine, { gameRounds } from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkNumberPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const createRound = () => {
  const question = Math.ceil(Math.random() * 100);
  const correctAnswer = checkNumberPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playPrimeGame = () => {
  const rounds = [];
  for (let count = 0; count < gameRounds; count += 1) {
    rounds[count] = createRound();
  }
  return runGameEngine(rounds, gameTask);
};

export default playPrimeGame;
