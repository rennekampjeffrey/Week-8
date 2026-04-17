diff --git a/script.js b/script.js
index 617b05d1b992a53dcb7975dd6e748169b5d30af5..4a3378ccc91da827462487df0d9dc94a80fa3197 100644
--- a/script.js
+++ b/script.js
@@ -12,45 +12,45 @@ menuItems.forEach((item) => {
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
-    ? "images/cafe-night.jpg"
-    : "images/cafe-day.jpg";
+    ? "images/cafe-night.svg"
+    : "images/cafe-day.svg";
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
