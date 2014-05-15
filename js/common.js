head.ready(function() {
	console.log($('body').html());
	$('.check').click(function(event) {
		$(this).toggleClass('is-checked');
	});
});