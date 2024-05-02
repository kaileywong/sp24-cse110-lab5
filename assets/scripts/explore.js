// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let btn = document.querySelector('section button');
  let inputTxt = document.getElementById('text-to-speak');
  let img = document.querySelector('img');

  btn.addEventListener('click', function () {
    const toSpeak = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        toSpeak.voice = voices[i];
      }
    }
    synth.speak(toSpeak);

    toSpeak.onstart = function () {
      img.src = './assets/images/smiling-open.png';
      img.alt = 'Smiling face with mouth open';
    }
    toSpeak.onend = function () {
      img.src = './assets/images/smiling.png';
      img.alt = 'Smiling face';
    }
  });
}