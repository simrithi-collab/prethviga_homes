const images = document.querySelectorAll(".rotator-img");
 const tabs = document.querySelectorAll(".project-active");
 const buttons = document.querySelectorAll(".project-buttons");
 const faqItems = document.querySelectorAll(".faq-item");
let index = 0;

function imageslide() {
  images.forEach((img) => img.classList.remove("active"));
  images[index].classList.add("active");
  index = (index + 1) % images.length;
}

imageslide();
setInterval(imageslide, 2500);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    if (index === 0) {
      buttons.forEach((btn) => (btn.style.display = "flex"));
    }

    if (index === 1) {
      buttons.forEach((btn) => (btn.style.display = "none"));
    }
  });
});



faqItems.forEach((item) => {
  item.querySelector(".question-types").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

