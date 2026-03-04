const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];

const menuList = document.getElementById("menu-list");

menuItems.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    menuList.appendChild(li);
});
