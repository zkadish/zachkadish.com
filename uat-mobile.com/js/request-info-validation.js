/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){

    var validationMessage;
    var regexEmail = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);

    $('#submit').click(function() {
		//form submission varilables
		var first, last, street, city, state, pcode, phone, email, gradyear, program, hear, other;

		first = $("#first-name").val();
		last = $("#last-name").val();
		street = $("#address").val();
		city = $("#city").val();
		stateID = $("#state").val();
		state = $("#state").next().children('a:last').html();
		pcode = $("#postal-code").val();
		phone = $("#phone-number").val();
		email = $("#email-address").val();
		gradyear = $("#high-school-grad-year").val();
		programID = $("#program-of-interest").val();
		program = $("#program-of-interest").next().children('a:last').html();
		hearID = $("#hear-about-us").val();
		hear = $("#hear-about-us").next().children('a:last').html();
		other = $("#other-inquiry").val();

        /*****************************/
        /*** First Name Validation ***/
        /*****************************/
        if(!$('#first-name').val()) {
            $('#first-name').focus().prev().prev().css('color', 'red').parent().css('border-color','red');
            return false;
        }
        /*********************************/
        /*** Last Name Validation ***/
        /*********************************/
        if(!$('#last-name').val()) {
            $('#last-name').focus().prev().prev().css('color', 'red').parent().css('border-color','red');
            return false;
        }
        /********************************/
        /*** Address Validation ***/
        /********************************/
        if(!$('#address').val()) {
            $('#address').focus().prev().prev().css('color', 'red').parent().css('border-color','red');
            return false;
        }
		/****************************/
        /****** City Validation *****/
        /****************************/
        if(!$('#city').val()) {
            $('#city').focus().prev().prev().css('color', 'red').parent().css('border-color','red');
            return false;
        }
        /****************************/
        /***** State Validation *****/
        /****************************/
        if(!$('#state').val()) {
            $('#state').focus().prev().prev().css('color', 'red');
            $('#state').parent().css('border-color','red');
			$('#state').next().children().first().removeClass('sbToggle');
			$('#state').next().children().first().addClass('sbToggleValState');
            return false;
        }
		/********************************/
        /** Zip/Postal Code Validation **/
        /********************************/
        if(!$('#postal-code').val()) {
            $('#postal-code').focus().prev().prev().css('color', 'red').parent().css('border-color','red');
            return false;
        }
        /*******************************/
        /*** Phone Number Validation ***/
        /*******************************/
        //if phone number field is empty return a validation error
        if(!$('#phone-number').val()) {
            $('#phone-number').focus().prev().prev().css('color', 'red').parent().css('border-color','red');
            return false;
        }
        //phone number is not long enough
        var phoneNumber = $('#phone-number').val();
        var ext = phoneNumber.indexOf('ext:');//find index of extension
        //alert("phoneNumber = " + phoneNumber);
        //alert("phoneNumber.length = " + phoneNumber.length);
        //if extension exsists remove it from the phoneNumber check
        if (ext != -1) {
            phoneNumber = phoneNumber.slice(0, ext)//remove the extension
            phoneNumber = phoneNumber.replace(/\s+$/, "");//remove trailing spaces
        }
        //check if phone is long enough
        if (phoneNumber.length < 14) {
            //space in area code
            var spaceIndex = phoneNumber.indexOf(" ");
            //space in prefix or suffix
            if (spaceIndex == 5) {
                //remove the area code from the phone number
                phoneNumber = phoneNumber.slice(6, phoneNumber.length);
                //find the index of the first space
                spaceIndex = phoneNumber.indexOf(" ");
                //if no spaces exsist the missing the numbers are in the suffix
                if (spaceIndex == -1) {//space in suffix
                    //take current length and add length of the area code
                    spaceIndex = phoneNumber.length + 6;
                } else {//space in prefix
                    //take index of space and add length of the area code
                    spaceIndex = phoneNumber.indexOf(" ") + 6;
                }
                //alert("If spaceIndex == 5 - spaceIndex = " + spaceIndex);
            }
            //vallidation feed back
            $('#phone-number').focus().css('color', 'red').parent().css('border-color','red');
            //the caret() is found in the jquery.maskedinput-1.3.js file
            $('#phone-number').caret(spaceIndex);//mover the focus caret into position
            return false;
        }
		/*************************************/
        /*** Email Address 1 ***/
        /*************************************/
        if(!$('#email-address').val()) {//required field check
            $('#email-address').focus().prev().prev().css('color', 'red').parent().css('border-color','red');
            return false;
        } else {//valid email check
            var key = $('#email-address').val();
            if(!regexEmail.test(key)) {
                $('#email-address').focus().css('color', 'red').parent().css('border-color','red');
                validationMessage = "Enter a valid email address.";
                emailValidationMessage('false', '#email-address', validationMessage);
                return false;
            } else {
                emailValidationMessage('true', '#email-address');
            }
        }
		/**************************************/
        /** High School Grad Date Validation **/
        /**************************************/
        if(!$('#high-school-grad-year').val()) {
            $('#high-school-grad-year').focus().prev().prev().css('color', 'red');
            $('#high-school-grad-year').parent().css('border-color','red');
			$('#high-school-grad-year').next().children().first().removeClass('sbToggle');
			$('#high-school-grad-year').next().children().first().addClass('sbToggleValState');
            return false;
        }
        
		/************************************/
        /******** Program of Interest *******/
        /************************************/
        if(!$('#program-of-interest').val()) {
            $('#program-of-interest').focus().prev().prev().css('color', 'red');
            $('#program-of-interest').parent().css('border-color','red');
			$('#program-of-interest').next().children().first().removeClass('sbToggle');
			$('#program-of-interest').next().children().first().addClass('sbToggleValState');
            return false;
        }

		/************************************/
        /***** Hear About Us Validation *****/
        /************************************/
        if(!$('#hear-about-us').val()) {
            $('#hear-about-us').focus().prev().prev().css('color', 'red');
            $('#hear-about-us').parent().css('border-color','red');
			$('#hear-about-us').next().children().first().removeClass('sbToggle');
			$('#hear-about-us').next().children().first().addClass('sbToggleValState');
            return false;
        }

		/**************************************************************/
		/********* Client Side Validation Complete ********************/
		/**************************************************************/
        
        //disable the submit button
        $("#submit").attr("disabled", "disabled");
        
		/*** exract the year from the graddate and pass it on... ***/
		/*** this was being used when the form returned the whole date -z- ***/
		//graddate = graddate.split("/");
		//gradyear = graddate[2];

		var myFormData = {
			first: first,
			last: last,
			street: street,
			city: city,
			stateID: stateID,
			state: state,
			pcode: pcode,
			phone: phone,
			email: email,
			gradyear: gradyear,
			programID: programID,
			program: program,
			hearID: hearID,
			hear: hear,
			other: other
		}
		
		$.post("ajaxHandler.aspx", myFormData, function (data) {
		/** uncomment the following line and the "processingresult" varible on ajaxHandler.aspx page, Also comment 
		    out the clearFormFields() and the redirect to see data appear under the form upon submission. **/
			//$("#ajaxResponse").html(data); 
		/** disable the button upon submission of data and redirect to the thankyou page... **/
			clearFormFields();
			document.location.href = "/mobile/InfoThankYou.aspx";
		});
        
    }); 
    
    //Allows upper and lower case alpha characters 
    //and the special characters . - '
    //The following code blocks all other characters from being entered into 
    //a form field with alphaVal class assigned to it
    $('.alphaVal').bind('keypress', function(event){
       var regexAlpha = new RegExp(/[0-9!@#$%^&*()_+={}|:;`~,/"<>?"[\]\\]/);
       //var regexAlpha = new RegExp(/[^A-z.'-]/);//everything except
       var key = String.fromCharCode(event.which);
       if (regexAlpha.test(key)) {
           event.preventDefault();
           return false;
       }
    });
   
    //hide the other text-areas
    $('#other-inquiry').parent().css('display', 'none');
    //reveal the other inquiry textarea
    $('.select-container').click(function() {
         if ($(this).children('div').children('.sbSelector').html() == "Other") {
             $('#other-inquiry').parent().css('display', 'block')
         } else {
             $('#other-inquiry').parent().css('display', 'none')
         }
    });
   
    function emailValidationMessage(valid, object, message) {
        //alert(valid);
        if (valid == 'false') {
            //alert('false');
            //alert('object = ' + object)
            $(object).parent().next().children().html(message);
            $(object).parent().next().slideDown('slow');
        } else {
            //alert('true');
            //alert('object = ' + object)
            $(object).parent().next().slideUp('slow');
        }
    }
   
    function clearFormFields() {
        $("#first-name").val("");
		$("#last-name").val("");
		$("#address").val("");
		$("#city").val("");
		$("#state").val("");
		$("#state").next().children('a:last').html("");
		$("#postal-code").val("");
		$("#phone-number").val("");
		$("#email-address").val("");
		$("#high-school-grad-year").val("");
		$("#high-school-grad-year").next().children('a:last').html("");
		$("#program-of-interest").val("");
		$("#program-of-interest").next().children('a:last').html("");
		$("#hear-about-us").val("");
		$("#hear-about-us").next().children('a:last').html("");
		$("#other-inquiry").val("");
    }
   
});
