import { printHero } from '../../hero/hero';
import { printAnswers } from '../answers/printAnswers';
import { printWave } from '../printWave/printWave';
import './quiz.css';

let currentWave = 0;

export const getCurrentWave = () => currentWave;

export const incrementCurrentWave = () => {
  currentWave++;
};

export const setCurrentWave = (newWave) => {
  currentWave = newWave;
};

export const printQuiz = () => {
  document.body.innerHTML = '';

  const quizElement = document.createElement('div');
  quizElement.id = 'quiz';

  const quizHero = document.createElement('section');
  quizHero.id = 'quiz-hero';

  const clueAnswersContainer = document.createElement('section');
  clueAnswersContainer.id = 'clue-answers';

  const quizTitle = document.createElement('div');
  quizTitle.className = 'quiz-title';

  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = 'assets/logo.png';

  logo.addEventListener('click', () => {
    document.body.innerHTML = '';
    printHero();
  });

  const h1title = document.createElement('h1');
  h1title.className = 'h1-title';
  h1title.textContent = 'Guess the Wave!';

  const waveContainer = document.createElement('div');
  waveContainer.className = 'wave-container';
  const waveImg = document.createElement('img');
  waveImg.className = 'wave-img';

  const h2title = document.createElement('h2');
  h2title.className = 'h2-title';
  h2title.textContent =
    'The best surfer out there is the one having the most fun';

  const clue = document.createElement('p');
  clue.className = 'clue';

  const answersContainer = document.createElement('div');
  answersContainer.className = 'answers-container';

  quizTitle.append(logo, h1title);
  waveContainer.appendChild(waveImg);
  quizHero.append(quizTitle, waveContainer, h2title);

  clueAnswersContainer.append(clue, answersContainer);

  quizElement.append(quizHero, clueAnswersContainer);
  document.body.appendChild(quizElement);

  printWave(currentWave);
  printAnswers(answersContainer, currentWave);
};
