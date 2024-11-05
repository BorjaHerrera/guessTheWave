import './score.css';
import { getRightAnswer } from '../answers/getAnswers';
import { resetGame } from '../resetGame/resetGame';

let score = 0;

export const getScore = () => score;

export const setScore = (newScore) => {
  score = newScore;
};

export const handleScore = (event, correctIndex, currentWave, wavesLength) => {
  const answerContainer = document.querySelector('.answers-container');

  const selectedAnswer =
    event.currentTarget.querySelector('.wave-name').textContent;

  const correctAnswer = getRightAnswer(correctIndex);
  const correctAnswerName = correctAnswer.name;

  const allAnswerButtons = document.querySelectorAll('.wave-info-container');

  if (selectedAnswer === correctAnswerName) {
    score++;
    event.target.style.color = 'green';
  } else {
    event.target.style.color = 'red';

    const correctButton = [...allAnswerButtons].find(
      (answer) =>
        answer.querySelector('.wave-name').textContent === correctAnswerName
    );
    if (correctButton) {
      const waveNameText = correctButton.querySelector('.wave-name');
      waveNameText.style.color = 'green';
    }
  }

  if (currentWave === wavesLength - 1) {
    printScore(score);
  }
};

export const printScore = (score) => {
  const quizElement = document.querySelector('#quiz');

  quizElement.innerHTML = '';

  const scoreContainer = document.createElement('div');
  scoreContainer.id = 'final-score';

  const scoreFinalImage = document.createElement('img');
  scoreFinalImage.src = 'https://i.postimg.cc/WpXHMtwC/score.jpg';
  scoreFinalImage.className = 'hidden';

  const scoreNumber = document.createElement('p');
  scoreNumber.className = 'score-number';

  const scoreSpan = document.createElement('span');
  scoreSpan.className = 'score-span';
  scoreSpan.textContent = score;

  const scoreTwenty = document.createElement('span');
  scoreTwenty.className = 'score-twenty';
  scoreTwenty.textContent = '/ 20';

  scoreNumber.append(scoreSpan, scoreTwenty);

  const scoreSentence = document.createElement('p');
  scoreSentence.className = 'score-sentence';

  const resetButton = document.createElement('button');
  resetButton.textContent = 'PLAY AGAIN';
  resetButton.className = 'reset-button';
  resetButton.addEventListener('click', resetGame);

  if (score >= 16) {
    scoreSentence.textContent =
      "Cowabunga! You're the king of the ocean—grab any wave you want, surf legend!";
  } else if (score >= 11 && score <= 15) {
    scoreSentence.textContent =
      "Shaka, bro! You're ripping it out there, almost ready for the big leagues!";
  } else if (score >= 6 && score <= 10) {
    scoreSentence.textContent =
      "Not too shabby! You've got the basics down, but you're still in the beginner lineup!";
  } else {
    scoreSentence.textContent =
      "Wipeout! You're still floundering in the foam, but don't give up—those waves won't ride themselves!";
  }
  scoreContainer.append(
    scoreFinalImage,
    scoreNumber,
    scoreSentence,
    resetButton
  );
  quizElement.appendChild(scoreContainer);
};
