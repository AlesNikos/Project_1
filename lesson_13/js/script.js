$(document).ready(function() {

	function showWindow() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown('slow');
	}

	function hideWindow() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideUp('slow');
	}

	$('.main_btna').on('click', showWindow);
	$('.main_btn').on('click', showWindow);
	$('.main_nav li:eq(1)').on('click', showWindow);

	$('.close').on('click', hideWindow);

});