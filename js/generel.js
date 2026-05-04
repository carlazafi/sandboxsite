const container = document.querySelector(".image-overlay");
const audio = document.getElementById("myAudio");

container.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
