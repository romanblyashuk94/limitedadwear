export default function showAlertMessage(alertRef, closeAlertBtnRef) {
  closeAlertBtnRef.addEventListener("click", onCloseAlert);

  function onCloseAlert() {
    alertRef.classList.remove("isOpen");
    closeAlertBtnRef.removeEventListener("click", onCloseAlert);
  }
}
