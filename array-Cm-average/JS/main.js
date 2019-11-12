//let studentArray = ["leonardo", "Raphael", "Donatello", "Michalangelo"];
//console.log("the first student name is:" + studentArray[0]);
//let fruits, text, fLen, i;
//fruits = ["banana", "orange", "apple", "mango"];
//fLen = fruits.length;
//text = "<ul>";
//for (i = 0; i < fLen; i++){
//	text += "<Li>" + fruits[i] + "</li>";
//}
//text += "</ul>";
//document.getElementById( "demo" ).innerHTML = text;

// 1----------------------------
// 	function check(){
// 		//declare
// 		let num1 = parseInt(document.getElementById("number1").value);
// 		let num2 = parseInt(document.getElementById("number2").value);
// 		let num3 = parseInt(document.getElementById("number3").value);

// 		let sumNum = parseInt(num1 + num2 + num3);
// 		let averageNum = parseInt((num1 + num2 + num3)/3);

// 		if (document.getElementById("sum").checked)
// 			document.getElementById("result").innerHTML = sumNum;
// 		} else if(document.getElementById("averageNum").checked){
// 			document.getElementById("result").innerHTML = averageNum;

// 		} else{
// 			document.getElementById("result").innerHTML = "select something"
// 		}
// 	2---------------------------------------
// 	let numberArray = [10, 10, 10]
// 		let average;
// 		let sum = 0;
// 		let i;
// 		for(i = 0; i < numberArray.length; i += 1){
// 			sum += numberArray[i];
// 		}
// 		average = sum / numberArray.length;

// 		function showArray(){
// 			document.getElementById("show").innerHTML = numberArray;

// 		}

// 		function Average(){
// 			document.getElementById("here").innerHTML = average;
// 		}
		//3------------------------------------------
		function convert(){
			let cm = parseInt(document.getElementById("cm").value);
			let convertCm = cm /2.54 ;
			document.getElementById("result").innerHTML = convertCm;
		}