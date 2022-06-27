function executeMobileMenu(openMenuBtnRef, closeMenuBtnRef, menuRef) {
  openMenuBtnRef.addEventListener("click", () =>
    menuRef.classList.toggle("isOpen")
  );
  closeMenuBtnRef.addEventListener("click", () =>
    menuRef.classList.toggle("isOpen")
  );
}

export default executeMobileMenu;
