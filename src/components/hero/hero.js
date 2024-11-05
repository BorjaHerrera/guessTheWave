import { printQuiz } from '../pages/quiz/quiz';
import './hero.css';

export const printHero = () => {
  document.body.innerHTML = '';

  const heroElement = document.createElement('section');
  heroElement.id = 'hero';

  heroElement.innerHTML = `

  <section id="motto">
  
    <h1>Guess the Wave!</h1>
    <h2>Let's test your Surfing Knowledge</h2>
   <img src="https://i.postimg.cc/8zrXQ4gg/homeimage.jpg" alt="A surfer riding a wave" class="hidden">
    <p>Do you think you have what it takes to recognize the world's most iconic surf spots just by looking at the unique characteristics of their waves?</p>
    <button id="startQuiz">LET'S RIDE SOME WAVES →</button>
</section>
  `;

  document.body.appendChild(heroElement);

  const startQuizButton = document.querySelector('#startQuiz');
  startQuizButton.addEventListener('click', () => {
    document.body.innerHTML = '';

    printQuiz();
  });
};
