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

    const minusIcon = btn.querySelector(".minus-icon");
    console.log(minusIcon)
    const plusIcon = btn.querySelector(".plus-icon");
    console.log(plusIcon)
    plusIcon.classList.remove("show-icon");
    console.log(minusIcon.style.display)
    minusIcon.classList.add("show-icon");

    faqAnswer.classList.toggle("show-text");
  });
});
