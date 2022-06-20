import executeRating from "./js/executeRating";
import showAlertMessage from "./js/showAlertMessage";

const alertRef = document.querySelector("[data-alert]");
const closeAlertBtnRef = document.querySelector("[data-close-alert]");
const ratingStars = [...document.getElementsByClassName("rating__star")];

executeRating(ratingStars);

showAlertMessage(alertRef, closeAlertBtnRef);
