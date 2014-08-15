// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
 

// Place any jQuery/helper plugins in here.
$(document).ready(function () {

	//hide all drop downs
	$(".degree-container").css("display", "none");

	//if the div is hidden reveal it with a slide animation
	//if not hidden then hide it with a slid animation
	$(".link-container").click(function () {
		if ($(this).children(".degree-container").css("display") == "none") {
			$(this).children(".degree-container").slideDown();
			$(this).children("span").removeClass("plus-icon").addClass("minus-icon");
		} else {
			$(this).children(".degree-container").slideUp();
			$(this).children("span").removeClass("minus-icon").addClass("plus-icon");
		}

	});


});






