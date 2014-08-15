<%@ Page Title="" Language="VB" MasterPageFile="mobile.master" AutoEventWireup="false" CodeFile="InfoThankYou.aspx.vb" Inherits="MobileRequestInfoThankYou" %>
<%@ Register TagPrefix="Navigation" TagName="MainMenu" Src="controls/main-menu.ascx" %>
<%@ Register TagPrefix="UATControl" TagName="Adwords" Src="/server_controls/Controls/AdWordsCode.ascx" %>
<%@ Register TagPrefix="UATControl" TagName="CollinsCollegeConversionCode" Src="/server_controls/Controls/CollinsCollegeTransfer-conversion-code.ascx" %>
<%@ Register TagPrefix="UATControl" TagName="DisplayNetworkConversionCode" Src="/server_controls/Controls/DisplayNetwork-conversion-code.ascx" %>

<asp:Content ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

<link rel="stylesheet" href="css/info-thank-you.css" />


<div class="content">
               
	<Navigation:MainMenu ID="MainMenu1" runat="server" />
	<div class="clearfix"></div>

	<article>
		<div class="about-text">
			<h1>Thank you!</h1>
			You have been sent an email confirmation.
			<br />
			Find out about the <a class="infoLink" href="http://www.uat.edu/majors/default.aspx">unique majors</a> 
			offered by the University of Advancing Technology.
			<br /><br />
			Curious about the rigorous coursework at the University? 
			Download a <a class="infoLink" href="https://www.uat.edu/requestinfo/Request_A_Catalog.aspx">catalog</a>.
			<br /><br />
			Get a glimpse of what life on campus is like and where our 
			<a class="infoLink" href="http://www.uat.edu/student_services/residence_life.aspx">students live</a>.
			<br /><br />
			Learn about UAT's <a class="infoLink" href="http://www.uat.edu/academics/default.aspx">teaching methodologies</a> 
			and <a class="infoLink" href="http://www.uat.edu/admissions/How_To_Apply.aspx">how to apply</a>.
		</div>
	</article>
</div>


    <UATControl:Adwords id="TrackingControl" runat="server"></UATControl:Adwords>
    <UATControl:CollinsCollegeConversionCode id="CollinsCollegeConversionCode1" runat="server"></UATControl:CollinsCollegeConversionCode>
    <UATControl:DisplayNetworkConversionCode id="DisplayNetworkConversionCode1" runat="server"></UATControl:DisplayNetworkConversionCode>
    
</asp:Content>

