<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage.master" AutoEventWireup="true" CodeFile="default.aspx.cs" Inherits="_default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <link rel="stylesheet" href="css/orbit-1.2.3.css" />

    <script src="js/vendor/jquery.orbit.responsive-1.2.3.js"></script>

    <script type="text/javascript">
        $(window).load(function () {
            $('#slide-show').orbit({
                bullets: true
            });
        });
    </script>

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <div class="slide-show-container">
        <!-- <div id="slide-inner-shadow"></div> -->
        <div id="slide-show">
            <p id="force-resize" style="font-size: 0;">
                <img style="width: 100%" src="img/slides/force-resize.png" alt="" />
            </p>
            <a href="currently.aspx" title="Currently Working On - Zach Kadish"><img src="img/slides/currently-v2.jpg" alt="" /></a>
            <a href="portfolio.aspx" title="Portoflio - Zach Kadish"><img src="img/slides/portfolio.jpg" alt="" /></a>
            <a href="about.aspx" title="about - Zach Kadish"><img src="img/slides/about.jpg" alt="" /></a>
            <a href="resume.aspx" title="resume - Zach Kadish"><img src="img/slides/resume.jpg" alt="" /></a>
            <a href="contact.aspx" title="contact - Zach Kadish"><img src="img/slides/contact.jpg" alt="" /></a>
        </div>
        <div class="orbit-bullets"></div>
    </div>
                
    <div id="site-quote">
        <div>
            <div>
                <div class="quote-open"></div>
                <div class="quote-close"></div>
                <!--
                Thank you for visiting! Have a look around<br />and get to know me a little better...
                -->
                <!--
                Thank you for visiting! This site is currently under construction. Please contact me for 
                a current resume and portfolio materials. Thanks again, -z- 
                -->
                These aren't the wire&dash;frames you're looking for...<br />
                &mdash; Obi Bluez Kenobi
            </div>
        </div>
    </div>

    <div id="action-btns">
        <nav>
            <a href="#" title="">
                WEB SKILLz
            </a>
            <a href="#" title="">
                WHAT's NEW
            </a>
            <a href="#" title="">
                RESOURCES
            </a>
        </nav>
    </div>

    <div id="action-text">
        <div>
            <div>
                Html5, css3, less, JavaScript, jQuery, knockout.js, grunt, photoshop and illustrator are my strongest skillz!
            </div>
            <div>
                This web site is my newest project! I have some very interesting plans for my new wire frame...
            </div>
            <div>
                A list of the companies and websites which have inspired informed and educated me in my persuit of the inter-webz...
            </div>
        </div>
    </div>

</asp:Content>

