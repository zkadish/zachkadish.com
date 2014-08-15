<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="msvalidate.01" content="5AA96688A62777B163B2D5EF9F93E25F" /><!-- bing/yahoo owner verification -->
<title>artstudio101</title>
<link rel="icon" type="image/gif" href="art101_favicon.gif" />
<link rel="stylesheet" type="text/css" href="stylesheet/globalstyles.css" />
<link rel="stylesheet" type="text/css" href="stylesheet/modalPopUp.css" />
<script language="javascript" src="javascript/jQuery_v1.6.2.js"></script>
<script language="javascript" src="javascript/imagePreLoader.js"></script>
<script language="javascript" src="javascript/galleryModal.js"></script>
</head>

<body>

<div id="siteWrapper">
	<!-- Header -->
    <?php include('header.html'); ?>
    <!-- Header -->
    
    <!-- Page -->
    <div id="contentWrapper">
    	<?php include($pageContent); ?>    
   		<!-- <iframe id="pageContent" src="about.html" width="800px" height="600px" scrolling="no" frameborder="0"></iframe> -->
    </div>
    <!-- Page -->
    
    <!-- footer -->
    <div id="footerWrapper">
    	<div id="bottomSpacer"></div>
    	<div class="divider"></div>
        <div class="footerText">
        	7505 east main street suit 400 | scottsdale, Az 85251 | p:480.663.0751 | f:480.663.0752 | <a href="mailto:art@artstudio-101.com">art@artstudio-101.com</a>
        </div>
    </div>
    <!-- footer -->
    


<div id="modelBG"></div>
<div id="modelContactWindow">

	<div id="modelMenuWrapper">
		<div class="closeBtn"></div>
    </div>
    
    <div class="logo" title="Artstudio 101" style="margin: 20px 0 0 90px;"></div><!-- 445px -->
    <div class="contactContent">
    	7505 east main street<br />
        suite 400<br />
        scottsdale, arizona 85251<br />
        tel: 480.663.0751<br />
        fax: 480.663.0752<br />
        email: <a href="mailto:art@artstudio-101.com">art@artstudio-101.com</a>
    </div>
    
    <div id="contactImage"></div>
    
    <div id="sendMessage" title="Send Us a Message"></div>
    
    <!-- <div id="messageContainer"> -->
    <iframe id="contactForm" src="contactForm.html" width="620px" height="190px" scrolling="no" frameborder="0"></iframe>
    <!-- </div> -->
    
</div>

<!-- <div id="modelBG"></div> -->
<div id="modelWindow">
	<div id="modelMenuWrapper">
    	<div id="modelMenuLeftSpacer"></div>
    	<div id="photographyModelBtn"></div>
    	<div id="paintingModelBtn"></div>
        <div id="mixedMediaModelBtn"></div>
        <div id="sculptureModelBtn"></div>
		<div class="closeBtn"></div>
    </div>
    
    <div id="imageTopSpacer"></div>
    <div id="imageWrapper">
    	<!-- model image populates here, max image size is 800x480 -->
    </div>
    <div class="imageBottomSpacer"></div>
    <div id="previousNextWrapperModel">
    	<div id="previousNextTopSpacer"></div>
    	<div id="previousModelBtn"></div>
        <div id="imageNumber">test</div>
        <div id="nextModelBtn"></div>
    </div>
    <div class="imageBottomSpacer"></div>
    <div class="modelFooterText">
      	7505 east main street suite 400 | scottsdale, Az 85251 | p:480.663.0751 | f:480.663.0752 | <a href="mailto:art@artstudio-101.com">art@artstudio-101.com</a>
    </div>
</div>

</div><!-- end siteWrapper -->

<script language="javascript" type="text/javascript">
//This function call controls witch tab the site opens on
	//pageContent("pageContent", "about");
</script>

</body>
</html>
