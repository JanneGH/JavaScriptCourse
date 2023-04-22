'use strict';

/* GUESSING GAME */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// make a function for displaying messages throughout game.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When no bewteen 1 and 20 or input or NaN
  if (!guess | (guess < 1) | (guess > 20)) {
    displayMessage('enter number between 1 and 20');
  }

  // when player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('correct number!');

    // determine if highscore changes
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // if guess is higher or lower or game ends adjust score and give output
  else if (guess != -secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You loose. Try again');
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
});

/* challenge */
// Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function () {
  // In the handler function, restore initial values of the 'score' and
  // 'secretNumber' variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Restore the initial conditions of the message, number, score and guess input fields
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  // ik had hieronder "20 staan, maar score kan natuurlijk ook :)"
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';

  // Also restore the original background color (#222) and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
