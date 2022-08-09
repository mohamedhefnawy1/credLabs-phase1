const creatorButton = document.getElementById("getStartedButton");        // create a constant in js file that references the button we made above
            //console.log(creatorButton);                                          // logs the value of the constant "creatorButton" to the console (dev tools)
            creatorButton.addEventListener("click", function(e) {                  // this is for what happens when the button we created is clicked 
            console.log("The button was clicked");                             
            // const name = prompt("Enter name: ");
            // console.log(name);
            // location.href = "http://127.0.0.1:5500/CREDLABS-creators-page/index.html";
            location.href = "https://effulgent-croquembouche-26c9f4.netlify.app/";
            

        });

const navButton = document.getElementById("navButton");        // create a constant in js file that references the button we made above
            //console.log(creatorButton);                                          // logs the value of the constant "creatorButton" to the console (dev tools)
            navButton.addEventListener("click", function(e) {                  // this is for what happens when the button we created is clicked 
            console.log("The button was clicked");                             
            // const name = prompt("Enter name: ");
            // console.log(name);
            // location.href = "http://127.0.0.1:5500/CREDLABS-experts-page/index.html";  // need the link for the expert page
            location.href = "https://effulgent-croquembouche-26c9f4.netlify.app/";
        });

const joinButton = document.getElementById("joinButton");        // create a constant in js file that references the button we made above
        //console.log(creatorButton);                                          // logs the value of the constant "creatorButton" to the console (dev tools)
        joinButton.addEventListener("click", function(e) {                  // this is for what happens when the button we created is clicked 
        console.log("The button was clicked");                             
        // const name = prompt("Enter name: ");
        // console.log(name);
        // location.href = "http://127.0.0.1:5500/CREDLABS-experts-page/index.html";  // need the link for the expert page
        location.href = "https://effulgent-croquembouche-26c9f4.netlify.app/";
    });


// //variables for image slider
// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');

// //Slider Buttons
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// //counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';

// //Button Listeners

// nextBtn.addEventListener('click', () =>{
//     if(counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transition = "transform  0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
// });

// prevBtn.addEventListener('click', () =>{
//     if(counter <= 0) return;
//     carouselSlide.style.transition = "transform  0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
// });

// carouselSlide.addEventListener('transitionend', ()=> {
//    if(carouselImages[counter].id === 'lastClone'){
//     carouselSlide.style.transition = "none";
//     counter = carouselImages.length-2;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
//    }
//    if(carouselImages[counter].id === 'firstClone'){
//     carouselSlide.style.transition = "none";
//     counter = carouselImages.length - counter;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
//    }
// });

