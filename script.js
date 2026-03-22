// Array of menu items
const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];

// Select the unordered list
const menuList = document.getElementById("menu-list");

// Loop through array and create list items
menuItems.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    menuList.appendChild(li);
});

// Daily Special Button Functionality
const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

button.addEventListener("click", () => {
    const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
    display.textContent = `⭐ Today's Special: ${randomItem} ⭐`;
});
