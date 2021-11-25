$(document).on('click', 'a[href^="#"]', function (event) {
    
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
});

$(".nav").click(function(){
    console.log("ehfoihazefpi");
    $("#menu").css("animation", "not-checked-anim .2s both;");
})