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

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const sparkleSymbols = ["✦", "✧", "✦", "✧"];

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", (e) => {
    const rect = btn.getBoundingClientRect();

    // 4 fixed spawn points along the button edges
    const spawnPoints = [
      { x: rect.left + rect.width * 0.2, y: rect.top }, // top-left area
      { x: rect.left + rect.width * 0.8, y: rect.top }, // top-right area
      { x: rect.left, y: rect.top + rect.height / 2 }, // left middle
      { x: rect.right, y: rect.top + rect.height / 2 }, // right middle
    ];

    spawnPoints.forEach((point) => {
      const sparkle = document.createElement("span");
      sparkle.classList.add("sparkle");
      sparkle.textContent =
        sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];

      const dx = (Math.random() - 0.5) * 60;
      const dy = -(Math.random() * 50 + 15);
      const dr = (Math.random() - 0.5) * 360 + "deg";

      sparkle.style.setProperty("--dx", dx + "px");
      sparkle.style.setProperty("--dy", dy + "px");
      sparkle.style.setProperty("--dr", dr);

      sparkle.style.left = point.x + "px";
      sparkle.style.top = point.y + "px";

      document.body.appendChild(sparkle);
      sparkle.addEventListener("animationend", () => sparkle.remove());
    });
  });
});
