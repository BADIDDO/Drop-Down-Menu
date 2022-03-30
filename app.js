const search = document.querySelector(".bx-search");
const searchInput = document.querySelector(".input-box")

search.addEventListener("click" , () => {
  searchInput.classList.toggle("active") 
  if(searchInput.classList.contains("active")) {
search.classList.replace("bx-search" , "bx-x")
  } else {
    search.classList.replace("bx-x" , "bx-search") 
  }
})

const menu = document.querySelector(".bx-menu");
const links = document.querySelector(".nav-links");

menu.addEventListener("click" , () => {
  links.classList.toggle("active");
  if(links.classList.contains("active")) {
    menu.classList.replace("bx-menu" , "bx-x")
      } else {
        menu.classList.replace("bx-x" , "bx-menu") 
      }
})