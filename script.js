$(document).ready(function () {

    $("button#reload").click(function () {
        window.location.reload(1);
    });

    const pageWidth = $("body").width();
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

    var title = ["student", "developer", "gamer", "translator"];


    for (var i = 0; i < title.length; i++) {
        window.setInterval(function() {
            $("#title").text(title[i]);
        }, 5000);
    }


});