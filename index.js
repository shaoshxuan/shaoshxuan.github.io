// Splash Screen FadeOut
const splashScreen = document.querySelector(".splashScreen");

document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        splashScreen.classList.add("fadeOut");
        document.getElementsByTagName("body")[0].style.overflowY = "visible";
    }, 8000);
})