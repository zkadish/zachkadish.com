<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage.master" AutoEventWireup="true" CodeFile="contact.aspx.cs" Inherits="contact" %>

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
            <!--<a href="#" title=""><img src="img/slides/resume.jpg" alt="" /></a>-->
            <a href="#" title=""><img src="img/slides/contact.jpg" alt="" /></a>
        </div>
        <!--<div class="orbit-bullets"></div>-->
    </div>


    <div class="contact-content">

        <div class="clearfix">
            ...
        </div>

        <hr />

        <div class="clearfix">
            ...
        </div>

    </div>

</asp:Content>

