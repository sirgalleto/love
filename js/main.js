$(document).ready(function(){
    $.scrollify({
        section : "section",
    });

    $(".note--words").typed({
          strings: ["me gustas.", "te amo.", "te extraño", "haces dentro de mi", "me haces falta", "te pienso", "miedo tengo de perderte :C"],
          typeSpeed: 100,
          loop: true
      });
});
