const playVideoBtn = document.querySelector('.portfolio__video-btn');
const video = document.querySelector('.portfolio__video-prewiew');
const playVideoIcon = document.querySelector('.portfolio__video-btn img');

playVideoBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playVideoIcon.src = "img/svg/play-icon-active.svg";
  } else {
    video.pause();
    playVideoIcon.src = "img/svg/play-icon.svg";
  }
})




const burgerBtn = document.querySelector('.burger');
const burgerIcon = document.querySelector('.burger__icon');
const header = document.querySelector('.header');
const body = document.querySelector('body');

burgerBtn.addEventListener("click", () => {
  header.classList.toggle("header--mobile");
  body.classList.toggle("no-scroll");

  if (header.classList.contains("header--mobile")) {
    burgerIcon.src = "img/svg/burger-exit.svg"
  } else {
    burgerIcon.src = "img/svg/burger-menu.svg"
  }
})



const btns = document.querySelectorAll('.btn');
const modal = document.querySelector('.plan');
const closeModalBtn = document.querySelector('.plan-close');

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.remove("none");
    body.classList.add("no-scroll");
  })
})

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("none");
  body.classList.remove("no-scroll");
})