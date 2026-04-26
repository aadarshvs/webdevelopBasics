
var redBox = document.getElementById('box1');
var blueBox = document.getElementById('box2');
var greenBox = document.getElementById('box3');
var yellowBox = document.getElementById('box4');


redBox.onclick = function() {
    redBox.style.color = "white";
    redBox.style.backgroundColor = "red";
};


blueBox.onclick = function() {
    blueBox.style.color = "white";
    blueBox.style.backgroundColor = "blue";
};


greenBox.onclick = function() {
    greenBox.style.color = "white";
    greenBox.style.backgroundColor = "green";
};


yellowBox.onclick = function() {
    yellowBox.style.color = "black";
    yellowBox.style.backgroundColor = "yellow";
};

var myButton = document.getElementById('button');
var myInput = document.getElementById('box');
var myGreeting = document.getElementById('greet');

myButton.onclick = function() {
    myGreeting.innerText = "Hello, " + myInput.value;
};
