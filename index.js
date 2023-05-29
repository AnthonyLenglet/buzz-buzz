const buzzerSound = document.querySelector("#sound");
const defaultSound = buzzerSound.children.item(
  Math.floor(Math.random() * buzzerSound.children.length)
);
defaultSound.setAttribute("selected", "");

const buzzerBtn = document.querySelector("#buzzer");
buzzerBtn.addEventListener("mousedown", () => {
  const buzzSound = new Audio(`./buzzes/${buzzerSound.value}.mp3`);
  buzzSound.play();
});
