$(function () {
	$( ".first .tlt_headlines" ).textillate({ 
		in: { 
			effect: 'rollIn',
			delayScale: 1, 
		} 
	});
});

$(function () {
	$( ".first .tlt_source" ).textillate({ 
		initialDelay: 1500,
		in: {
		 effect: 'rollIn',
		 delayScale: 0.3,
		 shuffle: true,
		}
	});
});

// on mouseclick

$(function () {
	$( ".second .tlt_headlines, .third .tlt_headlines" ).textillate({ 
		autoStart: false,
		in: { 
			effect: 'rollIn',
			delayScale: 1, 
		} 
	});
});

$(function () {
	$( ".second .tlt_source, .third .tlt_source" ).textillate({
		autoStart: false,
		//this seems to require a longer delay on mouseclick ones than on equivalent pageload ones -- wonder why?
		initialDelay: 2500,
		in: {
		 effect: 'rollIn',
		 delayScale: 0.3,
		 shuffle: true,
		}
	});
});


// eventually the below should be extracted as a function

/* function transition(hedge) {
	
	$( ".might.first" ).click(function() {
  		$( ".might.second" ).show();
	});

	$( ".might.second" ).click(function() {
  		$( ".might.third" ).show();
	});
}; */

$( ".might.first" ).click(function() {
  $( ".might.second" ).show();
  $( ".might.second .tlt_headlines, .might.second .tlt_source" ).textillate('start');
});

$( ".might.second" ).click(function() {
  $( ".might.third" ).show();
  $( ".might.third .tlt_headlines, .might.third .tlt_source" ).textillate('start');
});


$( ".allegedly.first" ).click(function() {
  $( ".allegedly.second" ).show();
  $( ".allegedly.second .tlt_headlines, .allegedly.second .tlt_source" ).textillate('start');
});

$( ".allegedly.second" ).click(function() {
  $( ".allegedly.third" ).show();
  $( ".allegedly.third .tlt_headlines, .allegedly.third .tlt_source" ).textillate('start');
});

$( ".could.first" ).click(function() {
  $( ".could.second" ).show();
  $( ".could.second .tlt_headlines, .could.second .tlt_source" ).textillate('start');
});

$( ".could.second" ).click(function() {
  $( ".could.third" ).show();
  $( ".could.third .tlt_headlines, .could.third .tlt_source" ).textillate('start');
});