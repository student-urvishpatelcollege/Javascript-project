let totalSeconds = 10;
const countdown = document.getElementById("countdown");

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `00:${min}:${sec}`;
}

countdown.textContent = formatTime(totalSeconds);

const timer = setInterval(() => {
  totalSeconds--;

  if (totalSeconds >= 0) {
    countdown.textContent = formatTime(totalSeconds);
  } else {
    countdown.textContent = "Let's Go!";
    clearInterval(timer);
  }
}, 1000);