const faqContainers = document.querySelectorAll(".faq-container");

// const minusBtns = document.querySelectorAll(".minus-icon");
// minusBtns.forEach(function (minusBtn) {
//   minusBtn.style.display = "none";
// });

faqContainers.forEach(function (singleContainer) {
  const btn = singleContainer.querySelector(".icon-container");

  btn.addEventListener("click", function () {
    const faqAnswer = singleContainer.querySelector(".faq-ans");

    faqContainers.forEach(function (currContainer) {
      if (currContainer !== singleContainer) {
        const currFaqAnswer = currContainer.querySelector(".faq-ans");
        currFaqAnswer.classList.remove("show-text");
      }
    });

    // btn.querySelector(".icon-img").src = "icons/circle-minus-solid.svg"
    // btn.querySelector(".minus-icon").classList.toggle("show-icon")

    // const minusIcon = btn.querySelector(".minus-icon");
    // const plusIcon = btn.querySelector(".plus-icon");
    // plusIcon.classList.toggle("hide-icon");
    // minusIcon.classList.toggle("show-icon");

    faqAnswer.classList.toggle("show-text");
  });
});
