console.log("Script started");

// Global variables to track the two circles that are being matched
let circle1 = null;
let circle2 = null;


function start() {
    console.log("click");

    // Start level 1
    let num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);
}

function createCircle(num) {
    // Create a div for the circle
    let circle = document.createElement("div");

    // Set text to a number
    circle.innerText = num;

    // Set color, shape, font size, etc.
    circle.style.backgroundColor = "lightBlue";
    circle.style.color = "white";
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.borderRadius = "50%";
    circle.style.textAlign = "center";
    circle.style.alignContent = "center";
    circle.style.fontSize = "25px";
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";

    // Add the circle to the page
    document.body.appendChild(circle);

    circle.addEventListener("click", handleClick);

}

// Generate random X coordinates
function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX;
}

// Generate random Y coordinates
function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}

function getRandomNum() {
    let rand = Math.random() * 100;
    rand = Math.floor(rand);
    return rand;
}

function handleClick(event) {
    let circle = event.target;

    // Determine which choice this is
    if (circle1 == null) {
        circle1 = circle;
    }
    else {
        circle2 = circle;
        // Determine if their numbers match
         if (circle1.innerText == circle2.innerText) {
            console.log("match");
            circle1.remove();
            circle2.remove();
            circle1 = null;
            circle2 = null;
        }
    }
}