$(document).ready(function () {

    $("button#reload").click(function () {
        window.location.reload(1);
    });

    var pageWidth = $("body").width();
    if (pageWidth < 800) {
        $("#hamburger").click(function () {
            $("#sidenav").animate({
                width: 'toggle'
            }, 350);
        });

        $("#cancel").click(function () {
            $("#sidenav").animate({
                width: 'toggle'
            }, 350);
        });

    }








});