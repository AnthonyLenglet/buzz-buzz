const buzzerSound = document.querySelector("#sound");
const buzzerBtn = document.querySelector("#buzzer");
const clearBtn = document.querySelector("#clear");

if (localStorage.getItem("buzzSound")) {
  buzzerSound.value = localStorage.getItem("buzzSound");
} else {
  const defaultSound = buzzerSound.children.item(Math.floor(Math.random() * buzzerSound.children.length));
  buzzerSound.value = defaultSound.value;
}

buzzerSound.addEventListener("change", (event) => {
  localStorage.setItem("buzzSound", event.target.value);
});

buzzerBtn.addEventListener("mousedown", () => {
  const buzzSound = new Audio(`./buzzes/${buzzerSound.value}.mp3`);
  buzzSound.play();
});

clearBtn.addEventListener("mousedown", () => {
  const defaultSound = buzzerSound.children.item(Math.floor(Math.random() * buzzerSound.children.length));
  buzzerSound.value = defaultSound.value;
  localStorage.setItem("buzzSound", defaultSound.value);
});
