const creatorButton = document.getElementById("creatorButton");        // create a constant in js file that references the button we made above
            //console.log(creatorButton);                                          // logs the value of the constant "creatorButton" to the console (dev tools)
            creatorButton.addEventListener("click", function(e) {                  // this is for what happens when the button we created is clicked 
            console.log("The button was clicked");                             
            // const name = prompt("Enter name: ");
            // console.log(name);
            location.href = "http://127.0.0.1:5500/CREDLABS-creators-page/index.html";

        });

const expertButton = document.getElementById("expertButton");        // create a constant in js file that references the button we made above
            //console.log(creatorButton);                                          // logs the value of the constant "creatorButton" to the console (dev tools)
            expertButton.addEventListener("click", function(e) {                  // this is for what happens when the button we created is clicked 
            console.log("The button was clicked");                             
            // const name = prompt("Enter name: ");
            // console.log(name);
            location.href = "http://127.0.0.1:5500/CREDLABS-creators-page/index.html";  // need the link for the expert page
        });