$(function () {
	$('.tlt_headlines').textillate({ 
		in: { 
			effect: 'rollIn',
			delayScale: 1, 
		} 
	});
});

// need version that only loads on mouseclick
$(function () {
	$('.tlt_source').textillate({ 
		initialDelay: 1500,
		in: {
		 effect: 'rollIn',
		 delayScale: 0.3,
		 shuffle: true,
		}
	});
});

// eventually this should be extracted as a function

$( ".might.first" ).click(function() {
  $( ".might.second" ).show();
});

$( ".might.second" ).click(function() {
  $( ".might.third" ).show();
});


$( ".allegedly.first" ).click(function() {
  $( ".allegedly.second" ).show();
});

$( ".allegedly.second" ).click(function() {
  $( ".allegedly.third" ).show();
});

$( ".could.first" ).click(function() {
  $( ".could.second" ).show();
});

$( ".could.second" ).click(function() {
  $( ".could.third" ).show();
});