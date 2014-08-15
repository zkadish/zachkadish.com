<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage.master" AutoEventWireup="true" CodeFile="currently.aspx.cs" Inherits="currently" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <link rel="stylesheet" href="css/orbit-1.2.3.css" />

    <script src="js/vendor/jquery.orbit.responsive-1.2.3.js"></script>

    <script type="text/javascript">
        $(window).load(function () {
            $('#slide-show').orbit({
                bullets: false
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
            <img src="img/slides/currently-v2.jpg" alt="" />
        </div>
    </div>

    <div class="currently-content">

        <div class="clearfix">
            
            <div class="artstudio101-logo"></div>

            <article>
                I am in the process of redesigning and building artstudio 101’s web site.
                While I love what was done with the first site its time to take the page 
                to the next level without losing the simple elegance of the first site.
            </article>
            <div class="feedback-links">
                <a href="http://artstudio-101.com" title="" target="_blank">visit the current site...</a>
                <a href="#" title="">then give me your feed back!</a>
            </div>

            <figure></figure>

        </div>

        <!--<hr />

        <div class="clearfix">
            ...
        </div>-->

    </div>

</asp:Content>




