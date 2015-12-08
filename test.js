var firstArr = $(":radio");
var firstBoxes = $(":checkbox.box");
var lastBoxes = $(":checkbox.box1");
var results = 0;
var tmpRes = 0;

$("#sendform").bind("click", function() {
	for (var i = 0; i < firstArr.length; i++) {
		if (i ==0 && firstArr.eq(i).prop("checked") || i == 6 && firstArr.eq(i).prop("checked") || i == 11 && firstArr.eq(i).prop("checked")) {
			results += 2;
		}
	}
	for (var i = 0; i < firstBoxes.length; i++) {
		if (firstBoxes.eq(i).prop("checked")) {
			if (i == 1 || i == 3) {
				tmpRes += 1;
			} else {
				tmpRes -= 1;
			}
		}
	}
	if ( tmpRes == 2 ) {
		results += 2;
		tmpRes = 0;
	} else {
		results += 0;
		tmpRes = 0;
	}
	for (var i = 0; i < lastBoxes.length; i++) {
		if (lastBoxes.eq(i).prop("checked")) {
			if (i == 0 || i == 1) {
				tmpRes += 1;
			} else {
				tmpRes -= 1;
			}
		}
	}
	if ( tmpRes == 2 ) {
		results += 2;
		tmpRes = 0;
	} else {
		results += 0;
		tmpRes = 0;
	}
	
	alert("You've obtained " + results + " points as you gave " + results * 10 + "% right answers");
	tmpRes = 0;
	results = 0;
	location.reload();
});