import executeMobileMenu from "./js/executeMobileMenu";
import executeRating from "./js/executeRating";
import showAlertMessage from "./js/showAlertMessage";

const alertRef = document.querySelector("[data-alert]");
const closeAlertBtnRef = document.querySelector("[data-close-alert]");
const ratingStars = [...document.getElementsByClassName("rating__star")];
const openMenuBtnRef = document.querySelector("[data-openMenuBtn]");
const closeMenuBtnRef = document.querySelector("[data-closeMenuBtn]");
const menuRef = document.querySelector("[data-menu]");

executeMobileMenu(openMenuBtnRef, closeMenuBtnRef, menuRef);
executeRating(ratingStars);
showAlertMessage(alertRef, closeAlertBtnRef);
