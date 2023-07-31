const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) =>
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const text = document.querySelector(".multiple-value");
let index = 0;
const values = ["Frontend-Devloper", "Designer", "Software Engineer"];

const setText = () => {
  if (index >= values.length) {
    index = 0; 
  }
  text.style.setProperty("--message-length", values[index].length);
  text.textContent = values[index];
  index++;
};

text.addEventListener("animationiteration", setText);

setText(); 
