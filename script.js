$(document).ready(function() {
    setTimeout(function() {
        $("#first-text").fadeOut(1000, function() {
            $("#first-image").fadeOut(1000, function() {
                $(this).attr("src", "fitness_2.jpg").fadeIn(1000);
                $("#first-text").text("Profita acum de ofertele noastre la antrenamente personalizate").fadeIn(1000);
            });
        });
    }, 3000);
});

$(document).ready(function() {
    $(".stats-number h1, .stats-label h1").hide().each(function(index) {
        $(this).delay(500 * index).fadeIn(1000);
    });
});