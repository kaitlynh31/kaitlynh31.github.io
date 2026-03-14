document.addEventListener("DOMContentLoaded", function () {
  console.log("page loaded");
  document.documentElement.style.scrollBehavior = "smooth";
});

const text = "hello, welcome to my site!";
const typedEl = document.querySelector(".typed");
const cursorEl = document.querySelector(".cursor");
let i = 0;

function type() {
  if (i < text.length) {
    typedEl.textContent += text[i];
    i++;
    setTimeout(type, 60);
  } else {
  }
}

type();
