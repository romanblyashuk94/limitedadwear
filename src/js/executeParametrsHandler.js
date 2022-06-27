function executeParametrsHandler(parametrsForm) {
  parametrsForm.addEventListener("change", () => {
    document.querySelector("[data-sizeOutput]").textContent =
      parametrsForm.elements["size"].value;
    document.querySelector("[data-colorOutput]").textContent =
      parametrsForm.elements["color"].value;
  });
}

export default executeParametrsHandler;
