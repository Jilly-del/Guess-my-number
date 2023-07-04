'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let jilly = Number(document.querySelector('.guess').value);
  // if it is not a number
  if (!jilly) {
    displayMessage('Not a Number');
  }
  // Jilly = secretNumber
  else if (jilly === secretNumber) {
    displayMessage(' Correct 💯');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when Jilly is not a SecretNumber
  else if (jilly !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(jilly > secretNumber ? 'Too High' : ' Too Low');
    } else {
      displayMessage('You have lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = 'black';
  displayMessage(' Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
});
