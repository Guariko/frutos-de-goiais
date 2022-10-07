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

/* TODO: Video section starts */

const videoCapaContainer = document.querySelector(".video__container");
const videoContainer = document.querySelector(".video__container__itself");
const closeVideoContainer = document.querySelector(".close__video");
const video = document.querySelector(".video");

videoCapaContainer.addEventListener("click", (e) => {
  addClass(videoContainer, classToDisplayElement);
  video.play();
});

closeVideoContainer.addEventListener("click", (e) => {
  removeClass(videoContainer, classToDisplayElement);
  video.pause();
});

/* FIXME: Video section ends */

/* TODO: Functions start */

function addClass(elementToUse, classToAdd) {
  elementToUse.classList.add(classToAdd);
}

function removeClass(elementToUse, classToRemove) {
  elementToUse.classList.remove(classToRemove);
}

/* FIXME: Functions end */
