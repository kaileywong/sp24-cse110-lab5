// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.getElementById('horn-select');
  const audio = document.querySelector('audio.hidden');
  const btn = document.querySelector('section button');
  const jsConfetti = new JSConfetti();

  select.addEventListener('change', function () {
    const selected = select.value;
    const image = document.querySelector('section img');

    if (selected === 'air-horn') {
      image.src = './assets/images/air-horn.svg';
      image.alt = "Air Horn";
      audio.src = './assets/audio/air-horn.mp3';
    }
    else if (selected === 'car-horn') {
      image.src = './assets/images/car-horn.svg';
      image.alt = "Car Horn";
      audio.src = './assets/audio/car-horn.mp3';
    }
    else if (selected === 'party-horn') {
      image.src = './assets/images/party-horn.svg';
      image.alt = "Party Horn";
      audio.src = './assets/audio/party-horn.mp3';
    }
  });

  const slider = document.getElementById('volume');
  slider.addEventListener('change', function () {
    const val = slider.value;
    const image = document.querySelector('#volume-controls img');

    if (val == 0) {
      image.src = './assets/icons/volume-level-0.svg';
      image.alt = 'Volume level 0';
    }
    else if (val < 33) {
      image.src = './assets/icons/volume-level-1.svg';
      image.alt = 'Volume level 1';
    }
    else if (val < 67) {
      image.src = './assets/icons/volume-level-2.svg';
      image.alt = 'Volume level 2';
    }
    else {
      image.src = './assets/icons/volume-level-3.svg';
      image.alt = 'Volume level 3';
    }
    audio.volume = val / 100;
  });

  btn.addEventListener('click', function () {
    audio.play();
    if (select.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}