
$(function () {

	//var currentYear = new Date();//retrieve the current year form the client
	//var year = currentYear.getFullYear();

	//retrieve the current year form the Server: The following <div> is being 
	//populated with on Page_Load() with the code behind of request-info-form.ascx
	var year = $("#serverYear").html(); 
	var option = new Array();
	var options = "";
	var startYear = 20 + 1; //how many years info the past plus one
	var endYear = 4; //how years into the future

	//The plus one accounts for the first index being 
	//zero and getting assigned an empty option.
	year = year - startYear;

	for (i = 0; i <= (startYear + endYear); i++) {
		if (i == 0) {
			option[0] = '<option> </option> \n';
		} else {
			option[i] = '<option value="' + (year + i) + '">' + (year + i) + '</option> \n';
		}

		options = options + option[i];

	}

	$("#high-school-grad-year").html(options);

});