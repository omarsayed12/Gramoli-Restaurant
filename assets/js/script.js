let navbar = document.getElementById('fixed-nav');
window.addEventListener("scroll", ()=> {
  setTimeout(() =>{
    if (window.scrollY >= 50) {
      navbar.classList.add("sticky")
    }else {
      navbar.classList.remove("sticky");
    }
  })
})


let header = document.getElementById('header');

window.addEventListener("scroll", () =>{
  setTimeout(()=> {
  window.scrollY >=50
    ? (header.style.marginTop = "80px")
    : (header.style.marginTop = "0")
  })
});



$( function() {
	$( "#datepicker" ).datepicker({
		// dateFormat: "dd بدايه من يوم",
		duration: "fast"
	});
} );