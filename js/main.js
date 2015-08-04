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
		//this seems to require a longer delay on mouseclick ones than the equivalent function when executed "on pageload" does -- I wonder why?
		initialDelay: 2000,
		in: {
		 effect: 'rollIn',
		 delayScale: 0.3,
		 shuffle: true,
		}
	});
});

function transition(hedgeWord) {

	// would this be even better with an array?, somehow? In theory this could allow automatic transitions for any number of headlines. But class-names would have to be changed to make this possible i.e. other parts of the code would have to change substantially

	var firstClass = hedgeWord + ".first";
	var secondClass = hedgeWord + ".second";
	var thirdClass = hedgeWord + ".third";

	function transition2(former, latter) {
		$( former ).click(function() {
	  		$( latter ).show();
	  		$( latter + " .tlt_headlines, " + latter + " .tlt_source").textillate('start');
		});
	};

	transition2(firstClass, secondClass);

	transition2(secondClass, thirdClass);
	
};

transition( ".might" );

transition( ".allegedly" );

transition( ".could" );