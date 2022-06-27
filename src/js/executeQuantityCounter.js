function executeQuantityCounter(
  productQuantityInput,
  productQuantityTotalOutput,
  productQuantityIncrementBtn,
  productQuantityDecrementBtn
) {
  productQuantityIncrementBtn.addEventListener("click", () => {
    const currentNumber = Number(productQuantityInput.value);
    if (currentNumber < 20) {
      productQuantityInput.value = currentNumber + 1;
      productQuantityTotalOutput.textContent = `$${(
        285 * productQuantityInput.value
      ).toFixed(2)}`;
    }
  });

  productQuantityDecrementBtn.addEventListener("click", () => {
    const currentNumber = Number(productQuantityInput.value);
    if (currentNumber > 1) {
      productQuantityInput.value = currentNumber - 1;
      productQuantityTotalOutput.textContent = `$${(
        285 * productQuantityInput.value
      ).toFixed(2)}`;
    }
  });
}

export default executeQuantityCounter;
