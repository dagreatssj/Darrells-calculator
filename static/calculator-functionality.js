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
}

function clearScreen() {
	$('input[name="screen"]').val("");
}
