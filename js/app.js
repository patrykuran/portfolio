AOS.init({
  duration: 1200,
});

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
});

$("li").click(function() {
	$('#toggle').toggleClass('active');
   	$('#overlay').toggleClass('open');
});

$("#overlay").click(function() {
	$('#toggle').toggleClass('active');
   	$('#overlay').toggleClass('open');
	console.log("you clicked overlay");
});