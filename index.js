const buzzerSound = document.querySelector("#sound");
const buzzerBtn = document.querySelector("#buzzer");
const randomBtn = document.querySelector("#random");
let currentBuzzSound;

const storedBuzzSound = localStorage.getItem("buzzSound");
if (storedBuzzSound) {
  setCurrentBuzz(storedBuzzSound);
} else {
  const randomSound = buzzerSound.children.item(
    Math.floor(Math.random() * buzzerSound.children.length)
  );
  setCurrentBuzz(randomSound.value);
}

buzzerSound.addEventListener("change", (event) => {
  localStorage.setItem("buzzSound", event.target.value);
  setCurrentBuzz(event.target.value);
});

randomBtn.addEventListener("mousedown", () => {
  const randomSound = buzzerSound.children.item(
    Math.floor(Math.random() * buzzerSound.children.length)
  );
  localStorage.setItem("buzzSound", randomSound.value);
  setCurrentBuzz(randomSound.value);
});

buzzerBtn.addEventListener("mousedown", () => {
  currentBuzzSound.currentTime = 0;
  currentBuzzSound.play();
});

function setCurrentBuzz(buzz) {
  buzzerSound.value = buzz;
  currentBuzzSound = new Audio(`./buzzes/${buzz}.mp3`);

  // Fix pour le delay sous safari
  const audioContext = new AudioContext();
  // ^ NE ME DEMANDE PAS POURQUOI

  currentBuzzSound.load();
}
