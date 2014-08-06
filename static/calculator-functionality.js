$(".btn").click(function(e) {
	e.preventDefault();
	var value = $(this).text();

	if (value == "=") {
		doCalculation();
	} else{
		addToScreen(value);
	}
});

$('a').click(function (e) {
	var backspace = $(this).find('span').hasClass("glyphicon glyphicon-arrow-left");
	var download = $(this).find('span').hasClass("glyphicon glyphicon-floppy-disk");
	var email = $(this).find('span').hasClass("glyphicon glyphicon-send");
	var remove = $(this).find('span').hasClass("glyphicon glyphicon-remove");

	if (backspace) {
		var onScreen = $('#calculator-screen').text();
		console.log(onScreen);
	} else if (download) {
		console.log("download");
	} else if (email) {
		console.log("email");
	} else if (remove) {
		clearScreen();
	} else {
		//do nothing
	}
});

function addToScreen(value) {
	var input = $('#calculator-screen');
	input.append(value);
}

function doCalculation() {
	var entered = $('#calculator-screen').text();
	var results = evaluateExpression(entered);

	$('#out').append("<h4>" + entered + "&nbsp=&nbsp" + results + "</h4>");
}

function clearScreen() {
	$('#calculator-screen').empty();
}

function evaluateExpression(expression) {
	var aRealNumber = "";
	var values = [];
	
	for (var i = 0; i < expression.length; i++) {
		if ($.isNumeric(expression.charAt(i))) {
			console.log(expression.charAt(i));
			aRealNumber += expression.charAt(i).toString();
		} else {
			if (aRealNumber != "") {
				values.push(aRealNumber);
			} 
			
			if (!$.isNumeric(expression.charAt(i))) {
				aRealNumber = "";
				console.log("what sign is it? " + expression.charAt(i));
			}
		}
	}

	if (aRealNumber != "") {
		values.push(aRealNumber);
	}

	console.log(values);
	return "empty"
}
