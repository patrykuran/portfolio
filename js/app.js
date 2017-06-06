AOS.init({
  duration: 1200,
});

$("#toggle, #overlay").click(function() {
	$('#toggle').toggleClass('active');
   	$('#overlay').toggleClass('open');
});