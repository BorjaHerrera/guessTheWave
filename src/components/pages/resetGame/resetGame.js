import { printQuiz, setCurrentWave } from '../quiz/quiz';
import { setScore } from '../score/score';

export const resetGame = () => {
  document.body.innerHTML = '';
  setCurrentWave(0);
  setScore(0);
  printQuiz();
};
