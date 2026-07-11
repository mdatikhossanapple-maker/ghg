// Smooth animation when page loads
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Fade-in effect
document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s ease";

// Active menu on click
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});

// Welcome message
setTimeout(() => {
  console.log("Welcome to MD Atik Hossan Apple's Portfolio");
}, 1000);
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML='<i class="fas fa-sun"></i>';
    }else{
        themeBtn.innerHTML='<i class="fas fa-moon"></i>';
    }
});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});