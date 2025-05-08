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


  const targetMain = new Date("2025-05-16T00:00:00");
  const diffMain = targetMain - now;
  const mainMessage = document.getElementById('main-message');

  if (diffMain <= 0) {
    mainMessage.style.display = 'block';
    mainMessage.textContent = "Nie wiem kiedy to czytasz albo już jadę albo jeszcze w domu siedzę i szykuje albo smacznie śpię jeszcze ale wiedz to że to ten dzień wyczekany przez nas od samego początku zaplanowania go. Co tu chce powiedzieć że cię mocno kocham cię Kamilo i jadę ci to pokazać jakoś może to pokaże ale nie wiem wiedz że chce tylko ciebie i to z tobą chce spędzić to moje nie za ciekawe życie ale z tobą wierze że będzie o wiele lepiej. Co mam przyszykowane dla ciebie tą jedną niespodziankę to ma oznaczać co wyrosło między nami te przepiękne uczucie które do siebie czujemy czy to zbudujemy od razu czy chwile poczekamy zobaczymy ale to będzie piękne coś czuje. Ale tak dodam że nie ważne co się będzie działo dobrze czy źle czy jakieś inne problemy się pojawią na naszej drodze to dalej będę przy tobie i będę ci towarzyszył do końca moich dni i luj oraz pięć dni dłużej. I mam nadzieje że już nie będę cię krzywdził w żaden sposób bo na to nie zasługujesz. Zasługujesz tylko na to szczęście i będę ci go dawał dalej. A na koniec tej wiadomości szykuj się na przytulasy całusy oraz upragniony dotyk który od mnie dostaniesz.";
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


  const targetMini = new Date("2025-05-04T20:00:00");
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
