// Menu Items
const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];
const menuList = document.getElementById("menu-list");

// Display menu
menuItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  menuList.appendChild(li);
});

// Daily Special
const specialButton = document.getElementById("show-special");
const display = document.getElementById("daily-special");

specialButton.addEventListener("click", () => {
  const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
  display.textContent = `Today's Special: ${randomItem}`;
});

// Day/Night Mode
const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;
const cafeImage = document.getElementById("cafe-image");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("night-mode");

  const isNight = body.classList.contains("night-mode");

  toggleBtn.textContent = isNight
    ? "Switch to Day Mode"
    : "Switch to Night Mode";

  // Image switch
  cafeImage.src = isNight
    ? "images/cafe-night.jpg"
    : "images/cafe-day.jpg";
});

// FAQ Accordion (only one open at a time)
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {

    document.querySelectorAll(".faq-answer").forEach((ans) => {
      if (ans !== question.nextElementSibling) {
        ans.classList.remove("show");
      }
    });

    const answer = question.nextElementSibling;
    answer.classList.toggle("show");
  });
});
