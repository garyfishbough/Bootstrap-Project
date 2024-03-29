// JQuery function to run carousel
$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});
// end carousel function

// Jquery functions to open and close Modals
$("#reserveButton").click(() => {
    $("#reserveModal").modal("show");
});

$("#loginButton").click(() => {
    $("#loginModal").modal("show");
});
// end Modal functions
