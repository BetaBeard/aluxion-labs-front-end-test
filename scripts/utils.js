/*
* Utility functions for the page
*
*
*/
$(document).ready(function(ev){
    $('#custom_carousel').on('slide.bs.carousel', function (evt) {
      $('#custom_carousel .controls li.active').removeClass('active');
      $('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    })

	$('#custom_carousel').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 > 0) {
        $(this).carousel('next');
    } else {
        $(this).carousel('prev');
    }
	});

});


// Open and close sidebar
function openNav() {
    $('#mySidebar')[0].style.width = "60%";
    $('#mySidebar')[0].style.display = "block";
}

function closeNav() {
    $('#mySidebar')[0].style.display = "none";
}