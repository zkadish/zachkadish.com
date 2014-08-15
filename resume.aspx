<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage.master" AutoEventWireup="true" CodeFile="resume.aspx.cs" Inherits="resume" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <link rel="stylesheet" href="css/orbit-1.2.3.css" />

    <script src="js/vendor/jquery.orbit.responsive-1.2.3.js"></script>

    <!-- <script type="text/javascript">
        $(window).load(function () {
            $('#slide-show').orbit({
                bullets: false
            });
        });
    </script> -->

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <div class="slide-show-container">
        <div id="slide-show">
            <p id="force-resize" style="font-size: 0;">
                <img style="width: 100%" src="img/slides/resume.jpg" alt="" />
            </p>
            <a href="#" id="pdf-resume-hotspot"></a>
            <a href="#" id="doc-resume-hotspot"></a>
            <a href="#" id="print-resume-hotspot"></a>
        </div>
    </div>

    <div class="resume-container">
        <div class="resume-content clearfix">

			<h2>Tech Skills:</h2>

			<ul class="tech-skills">
                <li>Agile Software Development</li>
				<li>html 5</li>
				<li>css 3 - less.js</li>
				<li>JavaScript - jQuery 2.1.1</li>
            </ul>

            <ul class="tech-skills">
				<li>Twitter Bootstrap </li>
				<li>knockout.js v2.3.0</li>
				<li>require.js</li>
				<li>Durandal.js v2.2</li>
            </ul>
					
            <ul class="tech-skills">
				<li>.Net - Master Pages</li>
				<li>Sublime 3</li>
				<li>Photoshop CC</li>
				<li>Illustrator CC</li>
            </ul>

            <ul class="tech-skills">
				<li>Visual Studio</li>
				<li>Source Tree - GIT</li>
				<li>Grunt Tasck Runner</li>
				<li>Responsive html frame work design</li>
            </ul>

        </div>
    </div>

    <div class="resume-container">
        <div class="resume-content experience clearfix">

			<h2>Work Experience:</h2>
            <h3>Front End App Developer</h3>
			<a href="http://www.marketstudies.com/" target="_blank" title="DeMark Analytics/Market Studies">
				DeMark Analytics
			</a>
			, Fulltime from December 2013 to present in Scottdales, AZ
			<ul>
				<li>Web Application Interface framework development and design.</li>
				<li>Interface integration with restful API and 3rd party plugins</li>
                <li>Preproduction Prototype development</li>
			</ul>

        </div>

        <div class="resume-content experience">
            
            <h3>Front End Web Developer</h3>
			<a href="http://www.lavidge.com/" target="_blank" title="Lavidge">
				Lavidge
			</a>
			, Contract from August 2013 to November in Phoenix, AZ
			<ul>
				<li>Built web assets from Photoshop designs and updated existing assets</li>
				<li>Html 5, css 3 and jQuery</li>
			</ul>

        </div>

        <div class="resume-content experience">
            
            <h3>Front End Web Developer</h3>
			<a href="http://www.praetoriangroup.com/" target="_blank" title="Lavidge">
				Praetorian Group
			</a>
			, Contract from August 2013 to November in Phoenix, AZ
			<ul>
				<li>html email: used Email on Acid for testing.</li>
				<li>Website page prototyping.</li>
			</ul>

        </div>

        <div class="resume-content experience">
		    
            <h3>Senior Front End Developer</h3>
            <a href="http://touchpointpromotions.com/" target="_blank" title="TouchPoint Promotions" style="display: inline-block;">
                TouchPoint Promotions
            </a>
            , Fulltime from November 2012 to March 2013 in Mesa, AZ.
			<ul>
				<li>Responsive Interface Development: HTML5, CSS3 and jQuery UI.</li>
				<li>Intuitive form layout and design and validation.</li>
				<li>Research and develop the latest techniques which serve the projects best interests.</li>
				<li>Guide the projects look and feel based on the user's point of view.</li>
			</ul>
			<!--<span style="font-size: 10px;">
				*Management at TouchPoint made the decision to stop developing in house software and outsourced instead.
			</span>-->
		</div>

        <div class="resume-content experience">
		    
            <h3>Web Producer</h3>
			<a href="http://www.uat.edu/" target="_blank" title="University of Advancing Technology">
				University of Advancing Technology
			</a>
			, Fulltime from November 2007 to November 2012 in Tempe, AZ
			<ul>
				<li>Site Maintenance - HTML, CSS and JavaScript.</li>
				<li>Website design, form layout, form validation and design.</li>
				<li>Web Application Interface Design</li>
				<li>Adjunct instructor (June to August 2012)</li>
				<li>Developed and taught a Special Topics Course: Responsive HTML/CSS frame-work design.</li> 
			</ul>

		</div>

        <div class="resume-content experience">
		    
            <h3>Project Manager</h3>
			<a href="http://www.inhance.com/" target="_blank" title="Zach Kadish - Inhance Digital">
				Inhance Digital
			</a>
			, Fulltime from August 2003 to November 2005 in San Jose, company has moved to Los Angeles, CA<br />
			<strong>Clients:</strong> Boeing, Bell helicopter, Textron, Cisco and Digital Park.
			<ul>
				<li>Set proper expectations with clients</li>
				<li>Story Board creation</li>
				<li>On time delivery of projects</li>
				<li>Art direction</li>
				<li>On site set up and technical support</li>
			</ul>

		</div>

        <div class="resume-content experience">
		    
            <h3>Senior Instructor</h3>
			<a href="http://www.uat.edu/" target="_blank" title="Zach Kadish - UAT">
				University of Advancing Technology
			</a>
			, Fulltime from April 1999 to August 2003 in Tempe, AZ<br />
			<ul>
				<li>Developed 3D animation and production degree curriculum.</li>
				<li>Developed course curriculum.
					<ul>
						<li>Introduction to Maya and 3D Studio Max courses.</li>
						<li>Modeling: nurbs, polygons and subdivision surfaces.</li>
						<li>Animation: Key frames and dynamic symulations.
						<li>Rendering and texturing coures.
					</ul>
				</li>
			</ul>

		</div>
    </div>
    
    <div class="resume-container">    				
        <div class="resume-content freelance clearfix">

            <h2>Freelance Contracts:</h2>
			<h3>Eaton Cambridge</h3>
			Web Contract from April 2012 to July 2012
			<ul>
                <li>Custom Graphics</li>
				<li>Site design and production</li>
                <li>html, css, Javascript, php.</li>
			</ul> 

		</div>

		<div class="resume-content freelance">

			<h3>Artstudio 101</h3> &ndash; 
            <a href="http://www.artstudio-101.com" target="_blank" title="Zach Kadish - Artstudio 101">
                http://www.artstudio-101.com
            </a>
			<br />
			Web Contract from June 2011 to December 2011 in Scottsdale, AZ
			<ul>
				<li>Site design and production - html, css, Javascript, php.</li>
			</ul> 

		</div>

		<div class="resume-content freelance">

			<h3>Binary Moon Studios</h3> &ndash; 
            <a href="http://www.binarymoonstudios.com/" target="_blank" title="Zach Kadish - Binary Moon Studios">
                http://www.binarymoonstudios.com
            </a>
			<br />
			Web Contract from December 2009 to May 2011 San Mateo, CA
			<ul>
				<li>Site maintenance for various Binary Moon Studio clients.</li>
				<li>Implemented jwplayer for direct hosting of video.</li>
				<li>html email development.</li>
			</ul> 

		</div>

		<div class="resume-content freelance">

			<h3>University of Advancing Technology</h3> &ndash; 
            <a href="http://www.uat.edu" target="_blank" title="Zach Kadish - UAT">
                http://www.uat.edu
                </a>
			<br />
			3D Contract from July 2003 to August 2003 in Tempe, AZ
			<ul>
				<li>Tech TV commercial: modeling, texturing, and animation.</li>
			</ul>
             
		</div>

		<div class="resume-content freelance">

			<h3>Lunacy Post</h3>
			<br />
			3D Contract from 2001 to 2003 in Scottsdale, AZ
			<ul>
				<li>Diamond Casino commercial: modeling, texturing, and animation.</li>
				<li>Rocky Mountain Emmy Award graphics: modeling.</li>
			</ul> 

		</div>
    </div>			

    <div class="resume-container">    				
        <div class="resume-content education clearfix">

			<h2>Education:</h2>
			<h3>Interface Technical Training</h3>
			Html5 and css3 certified training (November 2011) Phoenix, AZ

        </div>
        <div class="resume-content education clearfix">
			
			<h3>Alias|Wavefront</h3>
			Certified Maya Instructor: Character Animation (August 2000) Santa Barbara, CA

		</div>
        <div class="resume-content education clearfix">
			
			<h3>University of Advancing Technology</h3>
			Bachelor of Multi Media (December 2000) Tempe, AZ

		</div>
        <div class="resume-content education clearfix">
			
			<h3>San Francisco Art Institute</h3>
			Bachelor of Fine Art (December 1995) San Francisco, CA

        </div>
    </div>

    <div class="letter-of-rec">
        <div>
            <a href="assests/Z. Kadish LoR (Dec'05).pdf">Letter of recomendation from:<br />Dan Kolb - Operations Manager<br />Boeing</a>
        </div>
    </div>

</asp:Content>

