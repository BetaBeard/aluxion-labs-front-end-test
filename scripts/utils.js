/*
* Utility functions for the page
*
*
*/
$(document).ready(function(ev){
	function toggleSidebar() {
		$(".button").toggleClass("active");
		$("main").toggleClass("move-to-left");
		$(".sidebar-item").toggleClass("active");
	}
	
	$(".button").on("click tap", function() {
		toggleSidebar();
	});

	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
		toggleSidebar();
		}
	});
	
  	$('#custom_carousel').bind('wheel', function(e) {
		if(e.originalEvent.wheelDelta /120 > 0) {
			$(this).carousel('next');
		} else {
			$(this).carousel('prev');
		}
	});
	
	//This seems contradictory, but it prevents the page from scrolling
	//when the focus is on the carousel, so you can only scroll through the slides
	$('#custom_carousel').bind("wheel", function() {
		return false;
	});
});
