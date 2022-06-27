import executeImagePicker from "./js/executeImagePicker";
import executeMobileMenu from "./js/executeMobileMenu";
import executeParametrsHandler from "./js/executeParametrsHandler";
import executeQuantityCounter from "./js/executeQuantityCounter";
import executeRating from "./js/executeRating";
import showAlertMessage from "./js/showAlertMessage";

const alertRef = document.querySelector("[data-alert]");
const closeAlertBtnRef = document.querySelector("[data-close-alert]");
const ratingStars = [...document.getElementsByClassName("rating__star")];
const openMenuBtnRef = document.querySelector("[data-openMenuBtn]");
const closeMenuBtnRef = document.querySelector("[data-closeMenuBtn]");
const menuRef = document.querySelector("[data-menu]");

const selectedImageRef = document.querySelector("[data-selectedimage]");
const productImagesThumbnailRef = document.querySelector(
  "[data-productImagesThumbnail]"
);

const parametrsForm = document.querySelector(".parametrsForm");

const productQuantityInput = document.querySelector("[data-quantityInput]");
const productQuantityTotalOutput = document.querySelector(".totalPrice");
const productQuantityIncrementBtn = document.querySelector("[data-increment]");
const productQuantityDecrementBtn = document.querySelector("[data-decrement]");

executeParametrsHandler(parametrsForm);
executeImagePicker(productImagesThumbnailRef, selectedImageRef);
executeMobileMenu(openMenuBtnRef, closeMenuBtnRef, menuRef);
executeRating(ratingStars);
showAlertMessage(alertRef, closeAlertBtnRef);
executeQuantityCounter(
  productQuantityInput,
  productQuantityTotalOutput,
  productQuantityIncrementBtn,
  productQuantityDecrementBtn
);
