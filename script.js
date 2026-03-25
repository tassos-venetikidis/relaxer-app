const text = document.getElementById("text");
const container = document.getElementById("container");

container.addEventListener("animationiteration", () => {
  text.textContent = "Breathe In!";
  setTimeout(() => {
    text.textContent = "Hold!";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Breathe Out!";
  }, 4500);
});
