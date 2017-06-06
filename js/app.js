AOS.init({
  duration: 1200,
});

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
});

$("li").click(function() {
	$('#toggle').removeClass('active');
	console.log("you clicked li");
});