function myfunction1(){
	var person = prompt("please enter your name", "Harry potter");
	if(person != null){
		document.getElementById("insert").innerHTML = "hello!" + person + "how are you today?";
			}
			alert("Hi" + person + "nice work");
}

function myfunction2(){
	var list = document.getElementsByTagName("ul")[0];
	list.getElementsByTagName("li")[0].innerHTML = "cake";
}
function myfunction22(){
	var list = document.getElementsByTagName("ul")[0];
	list.getElementsByTagName("li")[1].innerHTML = "jam";
}

function changecolor(){
	var x = document.getElementById("change");
	var y = x.getElementsByClassName("child");
	var i;
	for (i=0; i < y.length; i++){
		y[i].style.backgroundColor = "orange";}
}
function insert(){
	document.writeln("<h1>Welcome to javaScript Programming!</h1>");
}

function toUP(){
	alert("you left the input field");
	var x = document.getElementById("fname");
	x.value = x.value.toUpperCase();
}
function onChange(){
	var a = document.getElementById("myselect").value;
	document.getElementById("changed").innerHTML = "you selected: " + a;
}

function error(){
	alert("The image could not be loaded.");
}

function toYellow(x){
	x.style.background = "yellow";
}
function