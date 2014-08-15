// JavaScript Document

//alert("test");

function validateForm() {
	//alert("validateForm()");
	
	if(document.getElementById("name").value == "") {
		//alert("Please enter your name");
		document.getElementById("name").focus();
		document.getElementById("name").style.borderColor = "#d10000";
		document.getElementById("errorMessage").innerHTML = "<img src=\"images/contact/nameError.png\" alt=\"\" border=\"0\" />";
		return false;
	}
	
	if(document.getElementById("email").value == "") {
		//alert("Please enter your email adderess.");
		document.getElementById("email").focus();
		document.getElementById("email").style.borderColor = "#d10000";
		document.getElementById("errorMessage").innerHTML = "<img src=\"images/contact/emailError.png\" alt=\"\" border=\"0\" />";
		return false;	
	} else {
		//alert("document.getElementById(\"email\") = " + document.getElementById("email").value);
		if(validateEmail(document.getElementById("email").value) == false){
			//alert("Please enter a valid email adderess.");
			document.getElementById("email").focus();
			document.getElementById("email").style.borderColor = "#d10000";
			document.getElementById("errorMessage").innerHTML = "<img src=\"images/contact/validEmailError.png\" alt=\"\" border=\"0\" />";
			return false;
		}
	}
	
	if(document.getElementById("message").value == "") {
		//alert("Please enter your message");
		document.getElementById("message").focus();
		document.getElementById("message").style.borderColor = "#d10000";
		document.getElementById("errorMessage").innerHTML = "<img src=\"images/contact/messageError.png\" alt=\"\" border=\"0\" />";
		return false;
	}
}

function validateEmail(elementValue){ 
	//alert("textbox value = " + elementValue);
	//alert("document.getElementById(\"email\") = " + document.getElementById("email").value);
   	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)?([\.]{1}[a-zA-Z]{2,4}){1,4}$/;
   	//alert("emailPattern.test(elementValue) = " + emailPattern.test(elementValue));
   	return emailPattern.test(elementValue);  
} 

function hideError() {
	document.getElementById("errorMessage").innerHTML = ""
	document.getElementById("name").style.borderColor = "#ccc";
	document.getElementById("email").style.borderColor = "#ccc";
	document.getElementById("message").style.borderColor = "#ccc";
}