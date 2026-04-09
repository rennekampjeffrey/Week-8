const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];
const menuList = document.getElementById("menu-list");

// Display menu items
menuItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  menuList.appendChild(li);
});

// Daily special button
const specialButton = document.getElementById("show-special");
const display = document.getElementById("daily-special");

specialButton.addEventListener("click", () => {
  const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
  display.textContent = `Today's Special: ${randomItem}`;
});
const cafeImage = document.getElementById("cafe-image");
// Day/Night Mode button
const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("night-mode");

  const isNight = body.classList.contains("night-mode");

  toggleBtn.textContent = isNight
    ? "Switch to Day Mode"
    : "Switch to Night Mode";

  cafeImage.src = isNight
    ? "Charming café at night.png"
    : "Charming café on a sunny morning.png";
});
});
