<%@ Page Language="VB" MasterPageFile="mobile.master" %>
<%@ Register TagPrefix="Navigation" TagName="MainMenu" Src="controls/main-menu.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="headStyles" runat="server">

	<link rel="stylesheet" href="css/contact.css" />

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="headScripts" runat="server">

</asp:Content>

<asp:Content ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

            <div class="content">

                <Navigation:MainMenu ID="MainMenu1" runat="server" />

                <div class="clearfix"></div>
				<article>
					<div class="about-text">
						<h1>University of Advancing Technology</h1>
						<h3><a class="link-style" href="tel:800-658-5744" title="UAT Phone - 800-000-0000">Phone: 1-800-658-5744</a></h3>
						<!-- Fax: <a href="tel:" title="UAT Fax - ">1-000-000-0000</a><br /> -->
						<h3><a class="link-style" href="mailto:communicationscenter@uat.edu" title="UAT Email -">Email: communicationscenter@uat.edu</a></h3>
						<h3>2625 West Baseline Road, Tempe, AZ 85018</h3>
						<iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=2625+W+Baseline+Rd,+Tempe,+AZ&amp;aq=0&amp;oq=2625+&amp;sll=33.605415,-112.125051&amp;sspn=0.927586,1.156311&amp;ie=UTF8&amp;hq=&amp;hnear=2625+W+Baseline+Rd,+Tempe,+Maricopa,+Arizona+85283&amp;t=m&amp;z=14&amp;ll=33.378092,-111.976032&amp;output=embed"></iframe>
						<br />
						<a class="link-style" style="text-align: center;margin-top: 10px;" href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=2625+W+Baseline+Rd,+Tempe,+AZ&amp;aq=0&amp;oq=2625+&amp;sll=33.605415,-112.125051&amp;sspn=0.927586,1.156311&amp;ie=UTF8&amp;hq=&amp;hnear=2625+W+Baseline+Rd,+Tempe,+Maricopa,+Arizona+85283&amp;t=m&amp;z=14&amp;ll=33.378092,-111.976032">View Larger Map</a>
					</div>
				</article>

            </div>

</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="footer" runat="server">

</asp:Content>