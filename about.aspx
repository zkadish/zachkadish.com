<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage.master" AutoEventWireup="true" CodeFile="about.aspx.cs" Inherits="about" %>

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
        <div id="slide-show">
            <p id="force-resize" style="font-size: 0;">
                <img style="width: 100%" src="img/slides/force-resize.png" alt="" />
            </p>
            <!--<a href="#" title=""><img src="img/slides/currently.jpg" alt="" /></a>-->
            <!--<a href="#" title=""><img src="img/slides/portfolio.jpg" alt="" /></a>-->
            <div title=""><img src="img/slides/about.jpg" alt="" /></div>
            <!--<a href="#" title=""><img src="img/slides/resume.jpg" alt="" /></a>
            <a href="#" title=""><img src="img/slides/contact.jpg" alt="" /></a>-->
        </div>
        <!--<div class="orbit-bullets"></div>-->
    </div>


    <div class="about-content">

        <div class="biography">
            
            Zachary Kadish, is a front end website developer, building on his skills and experience as a fine artist 
            and 3D animator. After earning his BFA degree at San Francisco Art Institute, Zach quickly figured out that 
            the art world just wasn’t suited for him, so he pursued and received a second bachelor’s degree in Multi 
            Media and Computer Science from the University of Advancing Technology in Tempe, AZ. Upon graduation, Zach 
            was hired by UAT to teach 3D animation and production. While Zach was teaching at UAT he was hired to produce 
            animation for a TV commercial used to promote UAT’s Game Degree Program. After three years of teaching at UAT, 
            Zach accepted a position with a small animation and video firm in San Jose, CA, creating presentation graphics 
            for defense industry giants such as Boeing and Bell helicopter, among others. Working his way up from 
            instructor/artist/animator to middle management, supervising anywhere from 3 to 20 employee/artists depending 
            on the job. Although entering middle management was quite an accomplishment he still wanted to be involved in 
            the creative process. In 2006, Zach realigned his technology focus to front end web development and design and 
            hasn’t looked back. Zach combines the skills of a website designer and developer, along with his fine art 
            background, to create innovative solutions to technology challenges that are presented in a unique and 
            beautiful fashion.

        </div>

        <hr />

        <div class="time-line">

            <div class="compass-icon"></div>

        </div>

    </div>

</asp:Content>

