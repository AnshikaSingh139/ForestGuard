```javascript
// ======================================
// FORESTGUARD - FOREST CONSERVATION SITE
// ======================================


// 1. MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    // Open or close the menu
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    // Update the button appearance and accessibility state
    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(isOpen));

});


// Close the menu after clicking a navigation link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// 2. CONSERVATION ACTION CHECKLIST

const checkboxes = document.querySelectorAll(".action-checkbox");

const progressText = document.getElementById("progressText");

const progressFill = document.getElementById("progressFill");

const resetBtn = document.getElementById("resetBtn");


// Update the checklist progress

function updateProgress() {

    // Count the checked actions
    let completed = 0;

    checkboxes.forEach(function (checkbox) {

        if (checkbox.checked) {
            completed++;
        }

    });

    // Calculate percentage
    const total = checkboxes.length;

    const percentage = total === 0
        ? 0
        : (completed / total) * 100;

    // Update the progress bar
    progressFill.style.width = percentage + "%";

    // Update the message
    if (completed === total) {

        progressText.textContent =
            "Amazing! You completed all 5 actions. Keep protecting our planet! 🌳";

    } else if (completed > 0) {

        progressText.textContent =
            `Great work! You have completed ${completed} out of ${total} actions.`;

    } else {

        progressText.textContent =
            `You have completed 0 out of ${total} actions. Start making a difference!`;

    }

}


// Listen for checkbox changes

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", updateProgress);

});


// 3. RESET THE CHECKLIST

resetBtn.addEventListener("click", function () {

    checkboxes.forEach(function (checkbox) {

        checkbox.checked = false;

    });

    updateProgress();

});


// 4. DISPLAY THE CURRENT YEAR IN THE FOOTER

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// 5. INITIALIZE THE WEBSITE

updateProgress();

console.log("Welcome to ForestGuard! Let's protect our forests. 🌿");
```
