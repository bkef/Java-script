function GrossIncome(){

	let hours= parseInt(document.getElementById("hours").value);
	let rate = parseInt(document.getElementById("rate").value);
	
		if (hours < 40){
		income = (hours * rate);}
		else {
		let	overtime = (hours - 40) * ((20 / 100) * rate);
		income = (overtime + (hours * rate));
		
			}
			document.getElementById("result1").innerHTML = income;
}

function convert(){
			let Fahrenheit = parseInt(document.getElementById("Fahrenheit").value);
			let Celsius = (Fahrenheit- 32) * (5/9);
			document.getElementById("result2").innerHTML = Celsius;
			if (Celsius < 0) {
				alert("Its freezing");
			}else if (Celsius > 30){
				alert( "Its too hot" );
			}else {
				alert("enjoy the weather");}

			}

function correct(){
	let correctanswer1 = document.getElementById("true1");
	let correctanswer2 = document.getElementById("true2");

		if (correctanswer1.checked && correctanswer2.checked) {
		alert("You made it,2 of 2!");
	} else if (correctanswer1.checked || correctanswer2.checked){
		alert("1 of 2! Good job");
	}else {
		alert("0 of 2. You should study more!");
	}

	}

