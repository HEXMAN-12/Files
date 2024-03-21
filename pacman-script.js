const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const gameContainer = document.getElementById('game-container');
const pacman = document.getElementById('pacman');
const ghostContainer = document.getElementById('ghost-container');
const dotsContainer = document.getElementById('dots-container');
const powerPelletContainer = document.getElementById('power-pellet-container');
const scoreValue = document.getElementById('score-value');
const levelValue = document.getElementById('level-value');
const gameOverScreen = document.getElementById('game-over-screen');
const finalScoreValue = document.getElementById('final-score-value');
const restartButton = document.getElementById('restart-button');
const eatSound = document.getElementById('eat-sound');
const gameOverSound = document.getElementById('game-over-sound');

let pacmanPositionX = 0;
let pacmanPositionY = 0;
let ghosts = [];
let dots = [];
let powerPellets = [];
let score = 0;
let level = 1;
let gameInterval;
let ghostInterval;

function initializeGame() {
  startScreen.style.display = 'none';
  gameContainer.style.display = 'block';
  gameOverScreen.style.display = 'none';
  score = 0;
  level = 1;
  scoreValue.textContent = score;
  levelValue.textContent = level;
  pacmanPositionX = 0;
  pacmanPositionY = 0;
  pacman.style.top = '0px';
  pacman.style.left = '0px';
  generateDots();
  generatePowerPellets();
  createGhosts();
  gameInterval = setInterval(movePacman, 200);
  ghostInterval = setInterval(moveGhosts, 500);
}

function generateDots() {
  dotsContainer.innerHTML = '';
  dots = [];
  for (let i = 0; i < level * 10; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    const randomPositionX = Math.floor(Math.random() * 10) * 40;
    const randomPositionY = Math.floor(Math.random() * 10) * 40;
    dot.style.top = randomPositionY + 'px';
    dot.style.left = randomPositionX + 'px';
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }
}

function generatePowerPellets() {
  powerPelletContainer.innerHTML = '';
  powerPellets = [];
  for (let i = 0; i < 4; i++) {
    const powerPellet = document.createElement('div');
    powerPellet.classList.add('power-pellet');
    const randomPositionX = Math.floor(Math.random() * 10) * 40;
    const randomPositionY = Math.floor(Math.random() * 10) * 40;
    powerPellet.style.top = randomPositionY + 'px';
    powerPellet.style.left = randomPositionX + 'px';
    powerPelletContainer.appendChild(powerPellet);
    powerPellets.push(powerPellet);
  }
}

function createGhosts() {
  for (let i = 0; i < 4; i++) {
    const ghost = document.createElement('div');
    ghost.classList.add('ghost');
    ghost.style.top = '360px';
    ghost.style.left = (i * 80) + 'px';
    ghostContainer.appendChild(ghost);
    ghosts.push(ghost);
  }
}

function movePacman() {
  const direction = getDirection();
  switch (direction) {
    case 'ArrowUp':
      pacmanPositionY = Math.max(0, pacmanPositionY - 40);
      break;
    case 'ArrowDown':
      pacmanPositionY = Math.min(360, pacmanPositionY + 40);
      break;
    case 'ArrowLeft':
      pacmanPositionX = Math.max(0, pacmanPositionX - 40);
      break;
    case 'ArrowRight':
      pacmanPositionX = Math.min(360, pacmanPositionX + 40);
      break;
    default:
      break;
  }
  pacman.style.top = pacmanPositionY + 'px';
  pacman.style.left = pacmanPositionX + 'px';
  checkCollision();
}

function getDirection() {
  const directions = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  return directions[Math.floor(Math.random() * directions.length)];
}

function moveGhosts() {
  ghosts.forEach(ghost => {
    const randomDirection = getDirection();
    let ghostPositionX = parseInt(ghost.style.left);
    let ghostPositionY = parseInt(ghost.style.top);

    switch (randomDirection) {
      case 'ArrowUp':
        ghostPositionY = Math.max(0, ghostPositionY - 40);
        break;
      case 'ArrowDown':
        ghostPositionY = Math.min(360, ghostPositionY + 40);
        break;
      case 'ArrowLeft':
        ghostPositionX = Math.max(0, ghostPositionX - 40);
        break;
      case 'ArrowRight':
        ghostPositionX = Math.min(360, ghostPositionX + 40);
        break;
      default:
        break;
    }
    ghost.style.top = ghostPositionY + 'px';
    ghost.style.left = ghostPositionX + 'px';
  });
}

function checkCollision() {
  checkDotCollision();
  checkPowerPelletCollision();
  checkGhostCollision();
}

function checkDotCollision() {
  dots.forEach((dot, index) => {
    if (dot.style.top === pacman.style.top && dot.style.left === pacman.style.left) {
      dotsContainer.removeChild(dot);
      dots.splice(index, 1);
      score += 10;
      scoreValue.textContent = score;
      eatSound.play();
      if (dots.length === 0) {
        level++;
        levelValue.textContent = level;
        generateDots();
      }
    }
  });
}

function checkPowerPelletCollision() {
  powerPellets.forEach((powerPellet, index) => {
    if (powerPellet.style.top === pacman.style.top && powerPellet.style.left === pacman.style.left) {
      powerPelletContainer.removeChild(powerPellet);
      powerPellets.splice(index, 1);
      score += 50;
      scoreValue.textContent = score;
      eatSound.play();
      clearInterval(ghostInterval);
      setTimeout(() => {
        ghostInterval = setInterval(moveGhosts, 500);
      }, 5000); // Ghosts will remain vulnerable for 5 seconds
    }
  });
}

function checkGhostCollision() {
  ghosts.forEach(ghost => {
    if (pacman.style.top === ghost.style.top && pacman.style.left === ghost.style.left) {
      clearInterval(gameInterval);
      clearInterval(ghostInterval);
      gameOver();
    }
  });
}

function gameOver() {
  gameOverSound.play();
  gameOverScreen.style.display = 'block';
  finalScoreValue.textContent = score;
}

function restartGame() {
  startScreen.style.display = 'block';
  gameContainer.style.display = 'none';
  gameOverScreen.style.display = 'none';
  ghostContainer.innerHTML = '';
  clearInterval(gameInterval);
  clearInterval(ghostInterval);
  ghosts = [];
}

startButton.addEventListener('click', initializeGame);
restartButton.addEventListener('click', restartGame);