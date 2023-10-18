'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayBackground = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};

const styleWidth = function (size) {
  document.querySelector('.number').style.width = size;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ Nu este numar');
    // document.querySelector('.message').textContent = '⛔ Nu este numar';
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Numar corect';
    displayMessage('🎉 Numar corect');
    // document.querySelector('body').style.backgroundColor = '#60b347';
    displayBackground('#60b347');
    // document.querySelector('.number').style.width = '30rem';
    styleWidth('30rem');
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Prea sus!!' : '📉 Prea jos!';
      displayMessage(guess > secretNumber ? '📈 Prea sus!' : '📉 Prea jos!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥 Ai pierdut jocul!!';
      displayMessage('💥 Ai pierdut jocul!!');
      //   document.querySelector('body').style.backgroundColor = '#ff0000';
      displayBackground('#ff0000');
    }
  }
});

// //before refactor
//   } else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = '📈 Prea sus!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 Ai pierdut jocul!!';
//     }
//   } else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = '📉 Prea jos!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 Ai pierdut jocul!!';
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Incepe sa ghicesti...';
  displayMessage('Incepe sa ghicesti...');
  document.querySelector('.score').textContent = score;
  //   document.querySelector('body').style.backgroundColor = '#222';
  displayBackground('#222');
  //   document.querySelector('.number').style.width = '15rem';
  styleWidth('15rem');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
