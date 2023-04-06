const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const bodyEl = document.querySelector("body")
const linkEl = document.querySelector("ul")

// Opening the menu
menuIcon.addEventListener("pointerdown", ()=> {
  linkEl.classList.add("menu-show");
  bodyEl.classList.add("menu-show");
})

// Closing the menu
closeIcon.addEventListener("pointerdown", ()=> {
  linkEl.classList.remove("menu-show");
  bodyEl.classList.remove("menu-show");
})