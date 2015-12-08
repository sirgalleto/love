'use strict';

$(document).ready(function(){

    /*
    Week number one
    1. I use scrollify to generate a sectionr scroll sensation
    2. Typed is for efect in second text
    */
    $.scrollify({
        section : "section",
    });


    $(".note--words").typed({
        strings: ["me gustas.", "te amo.", "te extraño", "haces dentro de mi", "me haces falta", "te pienso", "miedo tengo de perderte :C"],
        typeSpeed: 100,
        loop: true
    });

    /*
    Week number two
    With waypoint i can detect when a person is in a x section of the page, with this scanner i can activate the snow.
    */
    var waypoint = new Waypoint({
        element: $('.candle'),
        handler: function(direction) {
            $(document).snowfall({flakeCount : 100, maxSpeed : 4});
        },
        offset: 10
    });

    var waypoint = new Waypoint({
        element: $('.note'),
        handler: function(direction) {
            $(document).snowfall('clear');
        },
        offset: 20
    });
});
