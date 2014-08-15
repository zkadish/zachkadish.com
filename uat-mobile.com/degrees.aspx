<%@ Page Language="VB" MasterPageFile="mobile.master" %>
<%@ Register TagPrefix="Navigation" TagName="MainMenu" Src="controls/main-menu.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="headStyles" runat="server">

	<link rel="stylesheet" href="css/degrees.css">

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="headScripts" runat="server">

</asp:Content>

<asp:Content ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

            <div class="content">
                
				<Navigation:MainMenu ID="MainMenu1" runat="server" />

                <div class="clearfix"></div>
				<article>
					<div class="about-text">
						<div class="link-container">
							<span class="plus-icon"></span>
							<div class="degree-btn">BACHELOR OF ARTS</div>
							<div class="degree-container">
								<hr />
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Digital-Media/" target="_blank" tilte="Digital Media Degree">Digital Media</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Digital-Video/" target="_blank" title="Digital Video Degree">Digital Video</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Game-Art/" target="_blank" title="Game Art Degree">Game Art and Animation</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Game-Design/" target="_blank" title="Game Design Degree">Game Design</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/SGS/" target="_blank" title="Serious Games and Simulation Degree">Serious Games and Simulation</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Virtual-Modeling/" target="_blank" title="Virtual Modeling Degree">Virtual Modeling and Design</a>
								</div>
							</div>
						</div>
						<div class="link-container">
							<span class="plus-icon"></span>
							<div class="degree-btn">BACHELOR OF SCIENCE</div>
							<div class="degree-container">
								<hr />
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Advancing-Computer-Science/" target="_blank" title="Advancing Computer Science Degree">Advancing Computer Science</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Artificial-Life/" target="_blank" title="Artificial Life Degree">Artificial Life Programming</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Enterprise-Software/" target="_blank" title="Enterprise Software">Enterprise Software Development</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Game-Programming/" target="_blank" title="Game Programming Degree">Game Programming</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Human-Computer/" target="_blank" title="Human Computer Degree">Human Computer Interaction</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Network-Engineering/" target="_blank" title="Network Engineering Degree">Network Engineering</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Network-Security/" target="_blank" title="Network Security Degree">Network Security</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Open-Source/" target="_blank" title="Open Source">Open Source Technologies</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Robotics/" target="_blank" title="Robotics Degree">Robotics and Embedded Systems</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Strategic-Tech/" target="_blank" title="Strategic Technology Development Degree">Strategic Technology Development</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Tech-Forensics/" target="_blank" title="Technology Forensicss Degree">Technology Forensics</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Tech-Design/" target="_blank" title="Technology Product Design Degree">Technology Product Design</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Tech-Studies/" target="_blank" title="Technology Studies Degree">Technology Studies</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Social-Media/" target="_blank" title="Social Media Degree">Web and Social Media Technologies</a>
								</div>
							</div>
						</div>
						<div class="link-container">
							<span class="plus-icon"></span>
							<div class="degree-btn">UAT-ONLINE</div>
							<div class="degree-container">
								<hr />
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Advancing-Computer-Science/Pages/ACSOnline.aspx" target="_blank" title="Advancing Computer Science Online Degree">Adancing Computer Science</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Game-Art/Pages/Online.aspx" target="_blank" title="Game Art and Animaiton Online Degree">Game Art and Animation</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Game-Design/Pages/Online.aspx" target="_blank" title="Game Design Online Degree">Game Design</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Game-Programming/Pages/Online.aspx" target="_blank" title="Game Programming Online Degree">Game Programming</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Network-Security/Pages/Online.aspx" target="_blank" title="Network Security Online Degree">Network Security</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Tech-Forensics/Pages/TFOnline.aspx" target="_blank" title="Technology Forensics Online Degree">Technology Forensics</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Virtual-Modeling/Pages/Online.aspx" target="_blank" title="Virtual Modeling and Design Online Degree">Virtual Modeling and Design</a>
								</div>
							</div>
						</div>
						<div class="link-container">
							<span class="plus-icon"></span>
							<div class="degree-btn">MASTER OF SCIENCE</div>
							<div class="degree-container">
								<hr />
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Advancing-Computer-Science-Graduate/" target="_blank" title="Advancing Computer Science Masters Degree">Advancing Computer Science</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Emerging-Tech/" target="_blank" title="Emerging Technologies Masters Degree">Emerging Technologies</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Game-Production/" target="_blank" title="Game Production and Management Masters Degree">Game Production and Management</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Information-Assurance/" target="_blank" title="Information Assurance Masters Degree">Information Assurance</a>
								</div>
								<div class="link-container degree">
									<a href="http://majors.uat.edu/Tech-Leadership/" target="_blank" title="Technology Leadership Masters Degree">Technology Leadership</a>
								</div>
							</div>
						</div>
					</div>
				</article>
            </div>

</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="footer" runat="server">

</asp:Content>
