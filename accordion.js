document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item, index) => {
    const accordionIndex = item.querySelector(".accordion-index");
    if (accordionIndex) {
      accordionIndex.textContent = (index + 1).toString().padStart(2, '0');
    }
  });
});
