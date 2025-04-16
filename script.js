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

  // GŁÓWNY ZEGAR — do 16 maja
  const targetMain = new Date("2025-05-15T22:30:00");
  const diffMain = targetMain - now;
  const mainMessage = document.getElementById('main-message');

  if (diffMain <= 0) {
    mainMessage.style.display = 'block';
    mainMessage.textContent = "🎉 Nadszedł ten czas, czas spotkania długe wyczekiwany i tak dalej. Z tej okazji chciałbym powiedzieć pewnie to słuszałaś ale prawda jest jaka jest wazna jesteś w tym moim zyciu bez ciebie jak bez ręki az zacytuje teks piosenki jak to dobrze ze cie mam i warto będzie tyle czekać na ten dzień bo jednak no tęsknie i to mocna za tobą dzień po spotkaniu jak poszłaś do sklepu to no brakowało i tak się dobiłem ze luj wie ile bede czekać na ciebie w sumie sie tez boje ze jak sie nie bedziemy spotykać to coś ucichnie i koniec bedzie ale licze ze tak nie będzie i będzie tylko lepiej i lepiej. A jak czytasz to w nocy gratuluje za wytrwałość ale trzeba było iść spać bo wielki dzień czeka. ";
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

  // MINI ZEGAR — do 4 maja
  const targetMini = new Date("2025-05-04T22:00:00");
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