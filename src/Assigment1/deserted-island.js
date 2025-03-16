// This script toggles between day and night
window.addEventListener("DOMContentLoaded", () => {
  const sky = document.querySelector(".sky");
  const toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", () => {
    // Toggle the sky’s class between `night` and `day`
    if (sky.classList.contains("night")) {
      sky.classList.remove("night");
      sky.classList.add("day");
      toggleButton.textContent = "Switch to Night";
    } else {
      sky.classList.remove("day");
      sky.classList.add("night");
      toggleButton.textContent = "Switch to Day";
    }
  });
});
