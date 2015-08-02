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
			delayScale: 0.8, 
		} 
	});
});

$(function () {
	$( ".second .tlt_source, .third .tlt_source" ).textillate({
		autoStart: false,
		//this seems to require a longer delay on mouseclick ones than on equivalent pageload ones -- wonder why?
		initialDelay: 2000,
		in: {
		 effect: 'rollIn',
		 delayScale: 0.3,
		 shuffle: true,
		}
	});
});


// eventually the below should be extracted as a function

function transition(firstClass, secondClass, thirdClass) {

	$( firstClass ).click(function() {
  		$( secondClass ).show();
  		$( secondClass + " .tlt_headlines, " + secondClass + " .tlt_source").textillate('start');
	});

	$( secondClass ).click(function() {
	  $( thirdClass ).show();
	  $( thirdClass + " .tlt_headlines, " + thirdClass + " .tlt_source" ).textillate('start');
});
};

transition( ".might.first", ".might.second", ".might.third" );

transition( ".allegedly.first", ".allegedly.second", ".allegedly.third" );

transition( ".could.first", ".could.second", ".could.third" );