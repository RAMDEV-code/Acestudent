// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('window-scroll', window.scrollY > 0);
});

// Show/hide nav menu (for mobile)
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.classList.add("active");
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove("active");
});

// Optional: Close menu with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        menu.classList.remove("active");
    }
});
