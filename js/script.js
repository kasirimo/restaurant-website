const navigation = document.querySelector(".navigation");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");

navOpen.addEventListener("click", () => {
    navigation.style.right = "0";
});

navClose.addEventListener("click", () => {
    navigation.style.right = "-100%";
    
});