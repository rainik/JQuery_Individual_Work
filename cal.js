var inpStr = document.getElementById("calres");

var newvalue = false;
var medVal;
var operation = "";
var i = 0;

document.getElementById("one").onclick = function(){ num(1); }
document.getElementById("two").onclick = function() { num(2); }
document.getElementById("three").onclick = function() { num(3); }
document.getElementById("four").onclick = function() { num(4); }
document.getElementById("five").onclick = function() { num(5); }
document.getElementById("six").onclick = function() { num(6); }
document.getElementById("seven").onclick = function() { num(7); }
document.getElementById("eight").onclick = function() { num(8); }
document.getElementById("nine").onclick = function() { num(9); }
document.getElementById("zero").onclick = function() { num(0); }

document.getElementById("incr").onclick = function() { act("+"); }
document.getElementById("mult").onclick = function() { act("*"); }
document.getElementById("divide").onclick = function() { act("/"); }
document.getElementById("minus").onclick = function() { act("-"); }

document.getElementById("eqv").onclick = function() { eqv(); }
document.getElementById("cls").onclick = function() { clear(); }
document.getElementById("point").onclick = function() { dot(); }
document.getElementById("plusm").onclick = function() { plMin(); }

// input numbers
function num(n) {
	while(newvalue) {
		inpStr.value = n;
		newvalue = false;
	}
	if (inpStr.value == "0") {
		inpStr.value = n;
	} else {
		inpStr.value += n;
	}
}

// action
function act(x) {
	medVal = +inpStr.value;
	operation = x;
	inpStr.value = "";
	i = 0;
}

// final result
function eqv() {
	switch(operation) {
		case "+":
			inpStr.value = medVal + +(inpStr.value);
		break;
		case "-":
			inpStr.value = medVal - +(inpStr.value);
		break;
		case "*":
			inpStr.value = medVal * +(inpStr.value);
		break;
		case "/":
		if (inpStr.value == 0) {
			inpStr.value = "Делить на 0 не надо";
		} else {
			inpStr.value = medVal / +(inpStr.value);
		}
		break;
	}
}

// dot
function dot() {
	if (i == 0) {
		inpStr.value += "."
		i++;
	} else {
		return inpStr.value;
	}
}

// clear
function clear() {
	medVal = "";
	inpStr.value = "";
	operation = "";
	i = 0;
}

// negotiation
function plMin() {
	inpStr.value = +inpStr.value * -1;
}
