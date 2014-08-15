
$(document).ready(function () {

    //get page name from the URL
    var pageName = location.pathname.split('/');
    pageName = pageName[pageName.length - 1].replace(/.aspx/, '');
    console.log("pageName: " + pageName);

    //assign pageNmae to the id of the body for use in unique css on a sper page basis
    $('body').attr('id', pageName);


    //make footer vertical borders go to bottom of the page.
    var contentHeight = 955;
    $('#default footer > div > div').height($(window).height() - contentHeight);
    $(window).resize(function () {
        $('#default footer > div > div').height($(window).height() - contentHeight);
    });

    

































});


