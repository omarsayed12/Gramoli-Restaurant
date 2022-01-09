// define global variable
let navbar = document.getElementById('fixed-nav');
let header = document.getElementById('header');

// function to do sticky navbar
window.addEventListener("scroll", ()=> {
  setTimeout(() =>{
    if (window.scrollY >= 50) {
      navbar.classList.add("sticky")
    }else {
      navbar.classList.remove("sticky");
    }
  })
})

//function to do style for the header
window.addEventListener("scroll", () =>{
  setTimeout(()=> {
  window.scrollY >= 50
    ? (header.style.marginTop = "80px")
    : (header.style.marginTop = "0")
  })
});

// function date picker