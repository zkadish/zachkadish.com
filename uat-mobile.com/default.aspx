<%@ Page Language="VB" MasterPageFile="mobile.master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="headStyles" runat="server">

	<link rel="stylesheet" href="css/orbit-1.2.3.css" type="text/css" />
	
	<!--[if IE]>
	     <style type="text/css">
	         .timer { display: none !important; }
	         div.caption { background:transparent; filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000);zoom: 1; }
	    </style>
	<![endif]-->	

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="headScripts" runat="server">

	<script src="js/vendor/jquery.orbit-1.2.3.js" language="javascript" type="text/javascript"></script>

	<!-- Run Orbit -->
	<script type="text/javascript">
		$(window).load(function () {
			$('#slideshow').orbit({
				animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
				animationSpeed: 800,                // how fast animtions are
				timer: true, 			            // true or false to have the timer
				advanceSpeed: 4000, 		        // if timer is enabled, time between transitions 
				pauseOnHover: false, 		        // if you hover pauses the slider
				startClockOnMouseOut: false, 	    // if clock should start on MouseOut
				startClockOnMouseOutAfter: 1000,    // how long after MouseOut should the timer start again
				directionalNav: false, 		        // manual advancing directional navs
				captions: false, 			        // do you want captions?
				captionAnimation: 'fade', 		    // fade, slideOpen, none
				captionAnimationSpeed: 800, 	    // if so how quickly should they animate in
				bullets: true, 		            // true or false to activate the bullet navigation
				bulletThumbs: true, 	            // thumbnails for the bullets
				bulletThumbLocation: 'img/slides/bullet-thumbs/', 	        // location from this file where thumbs will be
				afterSlideChange: function () { }    // empty function 
			});
		});
	</script>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

			<div class="content">
				<div class="slideshow-container">
					<div id="slideshow">
						<p id="force-resize"><img src="img/slides/force-resize.png" alt="" /></p>
						<a href="about.aspx" data-thumb="about-btn.png"><img src="img/slides/about-slide.png" alt="" /></a>
						<a href="contact-uat.aspx" data-thumb="contact-uat-btn.png"><img src="img/slides/contact-slide.png" alt="" /></a>
						<a href="request-info.aspx" data-thumb="request-info-btn.png"><img src="img/slides/request-info-slide.png" alt="" /></a>
						<a href="degrees.aspx" data-thumb="degrees-btn.png"><img src="img/slides/degrees-slide.png" alt="" /></a>
					</div>
				</div>
				<div class="slide-show-gradient"></div>
				<!-- 
				<div class="main-menu">
					<a class="about-btn" href="about.aspx"></a>
					<a class="contact-uat-btn" href="contact.aspx"></a>
					<a class="request-info-btn" href="https://www.uat.edu/requestinfo/default.aspx"></a>
					<a class="degrees-btn" href="degrees.aspx"></a>
				</div> 
				-->
				<div class="clearfix"></div>
			</div>

</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="footer" runat="server">

</asp:Content>