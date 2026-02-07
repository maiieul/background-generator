var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");

// SET GRADIENT MANUALLY

function setGradient() {
 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ", " + color3.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

// RANDOM GRADIENT

var randomBtn = document.querySelector(".randomBtn");

function random255 () {
	return Math.floor(Math.random() * 256).toString(16);
}

function randomColor () {
	return "#" + random255() + random255() + random255();
}

function setRandomGradient() {
	console.log("click");
	body.style.background = "linear-gradient(to right, " + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
	css.textContent = body.style.background + ";";
}

randomBtn.addEventListener("click", setRandomGradient);
