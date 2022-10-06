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

/* TODO: Garantee starts */

const miniDesktop = 912;
let miniDesktopConfirm = false;

const imageToReplace = document.querySelector(
  ".garantee__img__second .garantee__image"
);

if (window.innerWidth >= 912) {
  imageToReplace.setAttribute("src", "assets/amount.webp");
  miniDesktopConfirm = true;
}

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 912) {
    if (!miniDesktopConfirm) {
      imageToReplace.setAttribute("src", "assets/amount.webp");
      miniDesktopConfirm = true;
    }
  } else {
    if (miniDesktopConfirm) {
      imageToReplace.setAttribute("src", "assets/loja2.webp");
      miniDesktopConfirm = false;
    }
  }
});

/* FIXME: Garantee ends */

/* TODO: Video section starts */

const videoCapaContainer = document.querySelector(".video__container");
const videoContainer = document.querySelector(".video__container__itself");
const closeVideoContainer = document.querySelector(".close__video");

videoCapaContainer.addEventListener("click", (e) => {
  addClass(videoContainer, classToDisplayElement);
});

closeVideoContainer.addEventListener("click", (e) => {
  removeClass(videoContainer, classToDisplayElement);
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
