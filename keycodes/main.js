"use strict";

let keyDisplay = document.getElementById("main");
let keyName = document.getElementById("main");

window.addEventListener("keydown", function(e) {
    keyDisplay.textContent = e.key;
    keyName.style.fontSize = "250px";
    changeColor();
});

function changeColor() {
    document.body.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
}

const colors = ["LightSkyBlue", "LightPink", "DarkTurquoise", "JadeGreen"];
