 var test = document.forms.quiz;
 var linksQ = test.elements.links;
 var listQ = test.elements.list;
 var servQ = test.elements.serv;
 var checkB = document.getElementsByName("box");
 var checkB1 = document.getElementsByName("box1");

var results = 0;
var tmpRes = 0;

function showResults() {
	if (linksQ[0].checked) {
		results += 2;
	};
	if (listQ[2].checked) {
		results += 2;
	};
	if (servQ[2].checked) {
		results += 2;
	};

	if  (checkB[0].checked) {
	 tmpRes -= 1;
	}
	if  (checkB[1].checked) {
	 tmpRes += 1;
	}
	if  (checkB[2].checked) {
	 tmpRes -= 1;
	}
	if  (checkB[3].checked) {
	 tmpRes += 1;
	}
	
	if ( tmpRes == 2 ) {
		results += 2;
		tmpRes = 0;
	} else {
		results += 0;
		tmpRes = 0;
	}
	
	if  (checkB1[0].checked) {
	 tmpRes += 1;
	}
	if  (checkB1[1].checked) {
	 tmpRes += 1;
	}
	if  (checkB1[2].checked) {
	 tmpRes -= 1;
	}
	if  (checkB1[3].checked) {
	 tmpRes -= 1;
	}
	
	if ( tmpRes == 2 ) {
		results += 2;
	} else {
		results += 0;
	}

//return results;
alert("You've obtained " + results + " points as you gave " + results * 10 + "% right answers"); 
}



