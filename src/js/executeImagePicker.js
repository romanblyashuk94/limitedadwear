function executeImagePicker(productImagesThumbnailRef, selectedImageRef) {
  productImagesThumbnailRef.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
      return;
    }

    let currentSelectedImage =
      e.currentTarget.querySelector("img.selectedImage");
    currentSelectedImage.classList.remove("selectedImage");

    e.target.classList.add("selectedImage");
    selectedImageRef.src = e.target.src;
  });
}

export default executeImagePicker;
