var canvas = document.getElementById("drawingCanvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;

// draw vertical line
const centerX = window.innerWidth/2;
const centerY = window.innerHeight/13;
const targetY = centerY + 70;

context.moveTo(centerX,centerY);
context.lineWidth = 4;
context.strokeStyle = "white";
context.lineCap = "round";
context.lineTo(centerX,targetY);
context.stroke();

// draw arrow head
context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 4;
context.lineCap = "round";
context.moveTo(centerX-10,targetY - 10);
context.lineTo(centerX,targetY);
context.lineTo(centerX+10,targetY - 10);
context.stroke();