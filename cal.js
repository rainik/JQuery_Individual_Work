var inpStr = $("#calres");
var medVal;
var operation = "";
var i = 0;

$("body").delegate(":button", "click", function() {
				if ($(this).attr("id") == $(this).val()) {
					var n = $(this).attr("id");
					num (n);	
				}
			});

$("#incr").bind("click", function() { 
			var n = "+";
			act(n);
			}); 	
$("#minus").bind("click", function() { 
			var n = "-";
			act(n);
			}); 
$("#mult").bind("click", function() { 
			var n = "*";
			act(n);
			});
$("#divide").bind("click", function() { 
			var n = "/";
			act(n);
			});  			
			
$("#point").bind("click", function() { 
			if (i == 0) {
				inpStr.val(function(index, curValue) {
				return curValue + "."});
				i++;
			} else {
				return inpStr.val();
			}
		}); 
		
$("#plusm").bind("click", function() { 
				inpStr.val(function(index, curValue) {
				return curValue * -1 });
			}); 
			
$("#cls").bind("click", function() { 
		medVal = "";
		inpStr.val("");
		operation = "";
		i = 0;
		});
			
$("#eqv").bind("click", function() { 
	switch(operation) {
		case "+":
			inpStr.val(function(index, curValue) {
			return +medVal + +curValue;});
		break;
		case "-":
			inpStr.val(function(index, curValue) {
			return +medVal - +curValue;});
		break;
		case "*":
			inpStr.val(function(index, curValue) {
			return +medVal * +curValue;});
		break;
		case "/":
		if (inpStr.val() == 0) {
			inpStr.val("Делить на 0 не надо");
		} else {
			inpStr.val(function(index, curValue) {
			return +medVal / +curValue;});
		}
		break;
	}
});
			
function num(n) {
	inpStr.val(function(index, curValue) {
		return curValue + n;
	});
}

// action
function act(x) {
	medVal = inpStr.val();
	operation = x;
	inpStr.val("");
	i = 0;
}
