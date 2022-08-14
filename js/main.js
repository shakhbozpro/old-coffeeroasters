var elBurgerBtn = document.querySelector(".js-open-btn");

elBurgerBtn.addEventListener("click" , function() {
   elBurgerBtn.closest(".header").classList.toggle("nav-open");
})