AOS.init({
  duration: 1200,
});

$("#toggle, li, #overlay").click(function() {
	$('#toggle').toggleClass('active');
   	$('#overlay').toggleClass('open');
});