/** @format */

document.addEventListener("DOMContentLoaded", function () {
  let offset = 0;
  let sliderLine = document.querySelector(".slider-line");
  let setButtons = document.querySelectorAll(".mem-button");

  setButtons.forEach((button, i) => {
    button.addEventListener("click", function (event) {
      offset = 0;
      offset = offset + 500 * i;
      event.stopPropagation();
      setButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.toggle("active");
      return (sliderLine.style.left = -offset + "px");
    });
  });

  document.addEventListener("click", function () {
    setButtons.forEach((button) => {
      button.classList.remove("active");
      sliderLine.style.left = 0 + "px";
    });
  });
});
