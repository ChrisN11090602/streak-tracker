const completeBtn = document.getElementById("completeDayBtn");
const dayCount = document.getElementById("dayCount");
let streak = 0;

completeBtn.addEventListener("click", () => {
  streak++;
  dayCount.textContent = streak;
  animateCounter();
});

function animateCounter() {
  dayCount.style.transform = "scale(1.2)";
  dayCount.style.transition = "transform 0.2s ease";
  setTimeout(() => {
    dayCount.style.transform = "scale(1)";
  }, 200);
}
