$(document).ready(function(){
    $.scrollify({
        section : "section",
    });

    $(".note--words").typed({
          strings: ["Me gustas.", "Te amo.", "Te extraño", "Haces dentro de mi", "Me haces falta", "Te pienso", "Miedo tengo de perderte :C"],
          typeSpeed: 100,
          loop: true
      });
});
