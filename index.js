const buzzerSound = document.querySelector("#sound");
setDefaultSound();

const buzzerBtn = document.querySelector("#buzzer");
buzzerBtn.addEventListener("mousedown", () => {
  const buzzSound = new Audio(`./buzzes/${buzzerSound.value}.mp3`);
  buzzSound.play();
});

function setDefaultSound() {
  const defaultSound = buzzerSound.children.item(
    Math.floor(Math.random() * buzzerSound.children.length)
  );
  buzzerSound.value = defaultSound.value;
}
