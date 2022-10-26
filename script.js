const faqContainers = document.querySelectorAll(".faq-container");
const downIcons = document.querySelectorAll(".down-icon");

downIcons.forEach(function (currDownIcon) {
  currDownIcon.src = "icons/angle-down-solid.svg";
});

//setting the icon for the opening/closing buttons
let iconType = "down";
const iconEl = document.querySelectorAll(".plus-icon");
console.log(iconEl);
iconEl.forEach(function (currIconEl) {
  currIconEl.innerHTML = `
    <img class="icon" src = "icons/angle-${iconType}-solid.svg">
    `;
});
// console.log(iconEl[2].querySelector(".icon"))

faqContainers.forEach(function (singleContainer) {
  const btn = singleContainer.querySelector(".icon-container");

  // console.log(imgEl)

  btn.addEventListener("click", function () {
    const imgEl = singleContainer.querySelector(".icon");
    if (imgEl.src === "icons/angle-up-solid.svg") {
      imgEl.src = "icons/angle-down-solid.svg";
    } else {
      imgEl.src = "icons/angle-up-solid.svg";
    }
    imgEl.forEach(function (currImgEl) {
      if (currImgEl !== imgEl) {
        currImgEl.src = "icons/angle-down-solid.svg";
      }
    });
    const faqAnswer = singleContainer.querySelector(".faq-ans");

    faqContainers.forEach(function (currContainer) {
      if (currContainer !== singleContainer) {
        const currFaqAnswer = currContainer.querySelector(".faq-ans");
        currFaqAnswer.classList.remove("show-text");
      }
    });

    faqAnswer.classList.toggle("show-text");
  });
});
