var pickedColor;
var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons event listeners
    for(let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            
            // if(this.textContent === "Easy") {
            //     numSquares = 3
            // } else {
            //     numSquares = 6
            // }
    
            reset();
        });
    }

    for (var i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function () {
            // get color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }

    reset();
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // reset h1 background color
    h1.style.backgroundColor = "steelblue";
    // reset reset button text content
    resetButton.textContent = "New Colors";
    // reset message
    messageDisplay.textContent = "";
    // change colors of all squares on the page
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }    
}
// easyBtn.addEventListener("click", function () {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");

//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function () {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");

//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function () {
    reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function () {
        // get color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color) {
    // Loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // Change all colors to match given color
        squares[i].style.backgroundColor = color;

    }
};

function pickColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
};

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // repeat num times
    for (let i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
};

function randomColor() {
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};