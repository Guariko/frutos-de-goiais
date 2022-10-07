/* TODO: Global variables start */

const classToDisplayElement = "active";

/* FIXME: Global variables end */

/* TODO: Header starts */

const headerBars = document.querySelector(".header__bars");
const headerNavContainer = document.querySelector(".header__nav__container");
const closeHeaderNav = document.querySelector(".header__nav__close");

headerBars.addEventListener("click", (e) => {
  addClass(headerNavContainer, classToDisplayElement);
});

closeHeaderNav.addEventListener("click", (e) => {
  removeClass(headerNavContainer, classToDisplayElement);
});

const headerNavItems = document.querySelectorAll(".header__nav__item");

headerNavItems.forEach((headerItem) => {
  headerItem.addEventListener("click", (e) => {
    removeClass(headerNavContainer, classToDisplayElement);
  });
});

/* FIXME: Header ends */

/* TODO: Hero starts */

const videoThumb = document.querySelector(".video__thumb__container");
const closeVideo = document.querySelector(".close__video");
const videoContainer = document.querySelector(".video__container");
const video = document.querySelector(".video");

videoThumb.addEventListener("click", (e) => {
  addClass(videoContainer, classToDisplayElement);
  video.play();
});

closeVideo.addEventListener("click", (e) => {
  removeClass(videoContainer, classToDisplayElement);
  video.pause();
});

/* FIXME: Hero ends */

/* TODO: Functions start */

function addClass(elementToUse, classToAdd) {
  elementToUse.classList.add(classToAdd);
}

function removeClass(elementToUse, classToRemove) {
  elementToUse.classList.remove(classToRemove);
}

/* FIXME: Functions end */
