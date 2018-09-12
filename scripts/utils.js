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
	function toggleSubMenus() {
		$(".sub-sidebar-list").toggleClass("sub-sidebar-list-animation");
	}
	
	$(".button").on("click tap", function() {
		toggleSidebar();
	});
	
	$(".sidebar-item").on("click tap", function() {
		toggleSubMenus();
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
	
    $('#custom_carousel').on('slide.bs.carousel', function (evt) {
		$('#custom_carousel .controls li.active').removeClass('active');
		$('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    })


});
