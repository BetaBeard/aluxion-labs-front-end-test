/*
* Utility functions for the page
*
*
*/
$(document).ready(function(ev){
	
	//Show the sidebar menu
	function toggleSidebar() {
		$(".button").toggleClass("active");
		$("main").toggleClass("move-to-left");
		$(".sidebar-item").toggleClass("active");
	}
	
	//Show the sidebar sub-menus
	function toggleSubMenus() {
		$(".sub-sidebar-list").toggleClass("sub-sidebar-list-animation");	
		$(".sub-sidebar-item").toggleClass("active");
	}
	
	$(".button").on("click tap", function() {
		toggleSidebar();
	});
	
	$(".sidebar-item").on("click tap", function() {
		toggleSubMenus();
	});
	
	//Binds the carousel to the wheel event so you can scroll through the slides
	$('#custom_carousel').bind('wheel', function(e) {
		if(e.originalEvent.wheelDelta /120 > 0) {
			$(this).carousel('next');
		} else {
			$(this).carousel('prev');
		}
		//This seems contradictory, but it prevents the page from scrolling
		//when the focus is on the carousel, so you can only scroll through the slides
		return false;
	});
	
	//Controls the tabs sytles on the bottom of the page
    $('#custom_carousel').on('slide.bs.carousel', function (evt) {
		$('#custom_carousel .controls li.active').removeClass('active');
		$('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    })


});
