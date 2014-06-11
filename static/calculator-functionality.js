$(".btn").click(function(e) {
	e.preventDefault();
	var value = $(this).text();
	if (value == "=") {
		doCalculation();
	} else if (value == "C") { 
		clearScreen();
	} else{
		addToScreen(value);
	}
});

function addToScreen(value) {
	var input = $('input[name="screen"]');
	input.val(input.val() + value);
}

function doCalculation() {
	var entered = $('input[name="screen"]').val();
	var results = eval(entered);

	$('#history').append("<p>" + entered + "=" + results + "</p>");

	console.log(results);
	/*var postfix = [];
	var operands = [];
	for (var i = 0; i < entered.length; i++) {
		if ($.isNumeric(entered.charAt(i) && i == 0)) {
			postfix.push(entered.charAt(i));
		} else if($.isNumeric(entered.charAt(i))) { 
			//postfix[i-1] += entered.charAt(i);
		} else {
			operands.push(entered.charAt(i));
		}
	}
	
	for (var i = 0; i < postfix.length; i++) {
		console.log(postfix[i]);
	}*/

	/*var numbers = entered.match(/(\d+)/g);
	for (var i = 0; i < numbers.length; i++) {
		console.log(numbers[i]);
	}

	var operators = [];
	for (var i=0; i < entered.length; i++) {
		if (!$.isNumeric(entered.charAt(i))) {
			operators.push(entered.charAt(i));
		}
	}

	for (var i=0; i < operators.length; i++) {
		console.log(operators[i]);
	}*/
	
}

function clearScreen() {
	$('input[name="screen"]').val("");
}
