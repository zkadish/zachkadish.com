<%@ Page Language="VB" MasterPageFile="mobile.master" %>
<%@ Register TagPrefix="Navigation" TagName="MainMenu" Src="controls/main-menu.ascx" %>
<%@ Register TagPrefix="RequestInfo" TagName="Form" Src="controls/request-info-form.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="headStyles" runat="server">

	<link rel="stylesheet" href="css/request-info.css" />
	<link rel="stylesheet" href="css/jquery.selectbox.css" />
	<link rel="stylesheet" href="css/jquery-ui-1.10.0.datepicker.css" />

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="headScripts" runat="server">

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

            <div class="content">
               
				<Navigation:MainMenu ID="MainMenu1" runat="server" />

                <div class="clearfix"></div>
				<article>
					<div class="about-text">
						<h1>GET STARTED</h1>
						<hr style="margin-top: 0;"/>
						Provide your contact information below and an university advisor will contact you shortly to answer 
						your questions about UAT and any of its technology programs.
						<!-- these divs are used in trouble shooting the multiple overlapping event driven plugins 
						<div id="alert-message1">alert message1</div>
						<div id="alert-message2">alert message2</div>
						-->
						<RequestInfo:Form ID="RequestInfoForm1" runat="server" />

					</div>
				</article>

            </div>

</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="footer" runat="server">
	
	<!-- <script src="js/jquery-ui-1.10.0.datepicker.js"></script> -->
	<script src="js/populateGradYear.js"></script>
	<script src="js/jquery.textchange.js"></script>
	<script src="js/jquery.maskedinput.1.3.1.js"></script>
	<script src="js/form-lables.js"></script>
	<script src="js/jquery.selectbox-0.2.js"></script>
	<script src="js/request-info-validation.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>

	<script>
		$(function () {
			jQuery(function ($) {
				//set the mask plugin 
				$('#phone-number').mask('(999) 999-9999? ext:9999', { placeholder: " " })
				//set the mask plugin
				$('#high-school-grad-date').mask('99/99/9999', { placeholder: " " })/**/
				//set the selectbox plugin
				$(".replacedSelectbox").selectbox();
				//set the datepicker
				/*$("#high-school-grad-date").datepicker({
					showOtherMonths: true,
					selectOtherMonths: true,
					minDate: "-3Y",
					maxDate: "+3Y"
				});*/ /* days:'+10', months:'-4M', years:'+10Y' */
			});
		});
	</script>

</asp:Content>