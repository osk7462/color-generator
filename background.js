var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var h3 = document.getElementsByTagName("h3")[0];

function changeColor(){
	body.style.background = "linear-gradient(to right, "
	+color1.value + "," + color2.value +")";
	h3.textContent = body.style.background;
}


color1.addEventListener("input", changeColor)

color2.addEventListener("input", changeColor)


const array = [1,2,3,4];

const newArray = array.forEach((num) => {
	console.log(num*2)
});

const mapArray = array.map((num) => {
	return "hahaha"
})