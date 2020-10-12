const container = document.getElementById('container');
const instructions = document.getElementById('instructions');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  instructions.innerText = 'Inhale!';
  container.className = 'container grow';

  setTimeout(() => {
    instructions.innerText = 'Hold!';

    setTimeout(() => {
      instructions.innerText = 'Exhale!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
