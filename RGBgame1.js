alert("please work now");
var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

// add click listeners to squares
squares[i].addEventListener("click", function(){
// grab color to pickedColor
if(clickedColor === pickedColor){
    messageDisplay.textContent = "Correct!";
    changeColors(clickedColor);
}
});
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++;)
    squares[i].styleBackground = color;
}
}

function pickColor(){
    var random = math.floor(Math.random() * colors.length);
    return colors(random);
}