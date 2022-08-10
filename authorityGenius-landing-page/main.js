
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}


const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('is-active')
    mobileMenu.classList.toggle('is-active')
});

//animation for burger button

// const menuBtn = document.querySelector('.menu-btn');
// const mobileMenu = document.querySelector('.mobile-nav');
// let menuOpen = false;
// menuBtn.addEventListener('click', () =>{
//     if(!menuOpen){
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     }
//     else{
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }

  
// });
