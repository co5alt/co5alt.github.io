

$(document).ready(function () {
    $(".thumb img").click(function () {
        $(".project").fadeIn();
    });

    $(".close").click(function () {
        $(".project").fadeOut();
    });
});
