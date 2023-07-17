import "./styles.css";
var boxes = document.getElementById("box");
var circle = document.getElementById("round");
var hero = document.getElementById("home");

boxes.addEventListener("click", function () {
  circle.classList.toggle("circles");
  hero.classList.toggle("dark-mode");
});
