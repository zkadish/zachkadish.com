<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage.master" AutoEventWireup="true" CodeFile="portfolio.aspx.cs" Inherits="portfolio" %>

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
            <div><img src="img/slides/portfolio.jpg" alt="" /></div>
        </div>
    </div>

    <div class="action-btns">
        <nav>
            <a href="#" title="">
                Design & UXUI
            </a>
            <a href="#" title="">
                Fine Art and Graphics
            </a>
            <a href="#" title="">
                3d Visualization
            </a>
        </nav>
    </div>

    <div class="action-text">
        <div class="clearfix">
            <div>
                I really enjoy the integration of Art and Business or perhapps its the juxtaposition of function and 
                fasion that keeps me engaged...
            </div>
            <div>
                While I no longer practice fine art its something I really enjoy and have been waiting for enough free 
                time to come along so I can get back into it...
            </div>
            <div>
                I did 3d animaiton and production for ruffly 10 years here you will find some examples of the work I did 
                professionaly and just for fun...
            </div>
        </div>
    </div>

    <div class="portfolio-content">

        <div class="uat-mobile clearfix">
            <div class="column-left">
                <div>
                    <h1>UAT Mobile Home Page</h1>
                    <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</article>
                    <a href="uat-mobile.com">visit the site</a>
                </div>
            </div>
            <div class="column-right">
                <div></div>
            </div>
        </div>

        <hr />

        <div class="promotions-point clearfix">
            <div class="column-left">
                <div>
                    <h1><span>Touch Point Promotions</span><br />Promotions Point</h1>
                    <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</article>
                    <a href="#">visit the site</a>
                </div>
            </div>
            <div class="column-right">
                <div></div>
            </div>
        </div>

    </div>

</asp:Content>

