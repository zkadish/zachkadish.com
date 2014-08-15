/*********************************************************
Copyright (c) 2009 Stefano J. Attardi, http://attardi.org/
This code is used to toggle the labels on and off. 
**********************************************************/
$(function () {

	//Get the color of the text in the label and convert it to hex-code.
	//So it can be used in the foucus out part of the code.
	var labelColor = rgb2hex($('.text-container span').css('color'));
	var focusLabelColor = "#c4c4c4";
	var focusLabelBgColor = "#0d263c";
	var borderColor = "#fff";
	var validBorderColor = "#000";

	//populates labelColor
	function rgb2hex(rgb) {
		//IE returns Hex color value so check before conversion -zk-
		if (rgb.match(/^#/)) {
			//alert("hex");
			return rgb;
		} else {
			rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			return "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2);
		}
	}

	//Start of original toggle label code
	function toggleLabel() {
		var input = $(this);
		setTimeout(function () {
			var def = input.attr('title');
			if (!input.val() || (input.val() == def)) {
				//$('#alert-message1').html("field is empty");
				//alert("field is empty");
				//if there is nothing in the field's value
				//$('.text-container > span').css('color', labelColor);
				input.prev().prev('span').css('visibility', '');
				input.parent().css('border', 'solid 1px' + borderColor);
				input.parent().css('border-color', borderColor); //without this IE8 styles the border black... :(
				//selectbox style - make the selector in this if statement more dynamic
				/*if (input.next().children('.sbSelector').html() == " ") {
					alert("selectbox empty")
					//input.css('border', 'solid 1px' + borderColor); //-z- added
					//input.css('border', 'solid 1px red'); //-z- added
				/*} else if (input.next().children('.sbSelector').html()) {
					alert("selectbox has value")
					input.prev().prev('span').css('visibility', 'hidden');
					input.next().css('border-color', validBorderColor); //-z- added
				}*/
				if (def) {
					var dummy = $('<label></label>').text(def).css('visibility', 'hidden').appendTo('body');
					input.prev('span').css('margin-left', dummy.width() + 3 + 'px');
					dummy.remove();
				}
			} else {
				$('#alert-message1').html("field has value");
				//if there is something in the field then hide the label and change
				//the color of the fields border
				input.prev().prev('span').css('visibility', 'hidden');
				input.css('color', validBorderColor); //-z- added
				input.parent().css('border-color', validBorderColor);
				//selectbox style - make the selector in this if statement more dynamic
				if (input.next().children('.sbSelector').html()) {
					//alert("selectbox has value");
					input.prev().prev('span').css('visibility', 'hidden');
					input.next().css('border-color', validBorderColor);
				}
			}
		}, 0);
	};

	function resetField() {
		var def = $(this).attr('title');
		if (!$(this).val() || ($(this).val() == def)) {
			$(this).val(def);
			$(this).prev('span').css('visibility', '');
			$('.sbHolder').prev('span').css('visibility', '');
		}
	};

	$('input[type="text"], textarea').on('keydown', toggleLabel);
	$('input[type="text"], textarea').on('paste', toggleLabel);
	$('input[type="text"]').on('blur', toggleLabel); //needs blur for phone field
	$('textarea, select').on('change', toggleLabel);

	/*** buttons should not change colors when they recieve focus ***/
	/*** stopped button from changing color on focus from Tabing issue ***/
	$('.text-container>input, textarea').on('focusin', function () {
		//$('#alert-message').html("focusin - caret = " + $(this).caret().end);
		//alert($('.text-container>input, textarea').caret(5));
		$(this).prev().prev('span').css('color', focusLabelColor);
		//$('#alert-message').html("focusLabelColor = " + $(this).prev('span').css('color'));
	});

	//this prevents validation color(red) from staying
	//page load, hit submit, type a value then delete with losing focus
	$('.text-container>input, textarea').on('keypress, keydown', function () {
		//$('#alert-message2').html("event:keypress, keydown");
		$(this).prev().prev('span').css('color', focusLabelColor);
		//$('#alert-message').html("focusLabelColor = " + $(this).prev('span').css('color'));
	});

	/**************************************************************************/
	/************************ Has Text Function *******************************/
	/**************************************************************************/
	$('.text-container>input, textarea').bind('hastext', function () {
		toggleLabel.call(this);
	});
	/**************************************************************************/
	/************************ jquery.textchange.js ****************************/
	/**************************************************************************/

	$('.text-container>input, textarea').on('focusout', function () {
		//$('#alert-message2').html("focusout - event");
		//labelColor variable gets defined by rgb2hex()
		$(this).prev().prev('span').css('color', labelColor);
		//if the field is empty then return it's original border color 
		if (!$(this).val()) {
			$(this).css('border-color', borderColor);
		}
	});

	//run function on page load
	/*$(function () {
		//$("#other-inquiry").width($("#other-inquiry").parent().width() - 4);
		//$('input, textarea').each(function() { toggleLabel.call(this); });
	});*/

	/************** custom roll overs for form fields ******************/
	//text box hover
	$('.text-container > input').hover(function () {
		$(this).prev().css('background', focusLabelBgColor).css('opacity', ".2");
	}, function () {
		$(this).prev().css('background', '#fff').css('opacity', ".1");
	});
	//button hover
	$('.submit-container').hover(function () {
		$(this).children('.text-bg').css('background', '#ccc').css('opacity', ".75");
	}, function () {
		$(this).children('.text-bg').css('background', '#ccc').css('opacity', "0");
	});
	//select drop downs hover
	$('.select-container').hover(function () {
		$(this).children('.text-bg').css('background', focusLabelBgColor).css('opacity', ".2");
	}, function () {
		$(this).children('.text-bg').css('background', '#fff').css('opacity', ".1");
	});
	
	//bak-next buttons hover
	$('.back-next-wrapper input').hover(function () {
		$(this).prev().prev().css('background', '#6784a0').css('opacity', ".35");
	}, function () {
		$(this).prev().prev().css('background', '#6784a0').css('opacity', ".75");
	});
	
	//textarea width set size to the width of the label on page load and on window resize.
	$("#other-inquiry").width($("#other-inquiry").parent().width() - 4);
	window.onresize = function () {
		$("#other-inquiry").width($("#other-inquiry").parent().width() - 4);
	};

	//textarea hover and textarea changes with resize
	$('textarea').bind('mousemove mouseup', function () {
		//$('#alert-message1').html($(this).height());
		$(this).prev('span').height($(this).height() + 13);
	}).hover(function () {
		$(this).prev('span').css('background', focusLabelBgColor).css('opacity', ".2");
	}, function () {
		$(this).prev('span').css('background', '#fff').css('opacity', ".1");
	});

});