$(function () {
	$('.tlt_headlines').textillate({ 
		in: { 
			effect: 'rollIn',
			delayScale: 1, 
		} 
	});
});

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