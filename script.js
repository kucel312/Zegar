function pad(n) {
  return n.toString().padStart(2, '0');
}

function updateUnit(id, newValue) {
  const unit = document.getElementById(id);
  const card = unit.querySelector('.flip-card');
  const span = card.querySelector('span');

  const currentValue = span.textContent;
  if (currentValue !== newValue) {
    card.classList.add('flip');
    setTimeout(() => {
      span.textContent = newValue;
      card.classList.remove('flip');
    }, 250);
  }
}

function updateCountdown() {
  const now = new Date();


  const targetMain = new Date("2025-09-29T00:00:00");
  const diffMain = targetMain - now;
  const mainMessage = document.getElementById('main-message');

  if (diffMain <= 0) {
    mainMessage.style.display = 'block';
    mainMessage.textContent = "No i nastał oczekiwany czass kiedy w końcu się spotkamy! ❤️✨";
  } else {
    const days = pad(Math.floor(diffMain / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((diffMain / (1000 * 60 * 60)) % 24));
    const minutes = pad(Math.floor((diffMain / (1000 * 60)) % 60));
    const seconds = pad(Math.floor((diffMain / 1000) % 60));

    updateUnit('days', days);
    updateUnit('hours', hours);
    updateUnit('minutes', minutes);
    updateUnit('seconds', seconds);

    mainMessage.style.display = 'none';
  }


  const targetMini = new Date("2025-08-04T00:00:00");
  const diffMini = targetMini - now;

  const miniTimer = document.getElementById('mini-timer');
  const miniMessage = document.getElementById('mini-message');

  if (diffMini <= 0) {
    miniTimer.style.display = 'none';
    miniMessage.style.display = 'block';
  } else {
    const d = Math.floor(diffMini / (1000 * 60 * 60 * 24));
    const h = pad(Math.floor((diffMini / (1000 * 60 * 60)) % 24));
    const m = pad(Math.floor((diffMini / (1000 * 60)) % 60));
    const s = pad(Math.floor((diffMini / 1000) % 60));
    miniTimer.textContent = `${d} dni, ${h}:${m}:${s}`;
    miniTimer.style.display = 'block';
    miniMessage.style.display = 'none';
  }
}


updateCountdown();
setInterval(updateCountdown, 1000);

