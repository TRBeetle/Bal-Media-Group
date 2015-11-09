$("#nav").addClass("js").before(
    '<div id="menu"><i class="icon-reorder"></i> Menu</div>');
$("#menu").click(function() {
    $("#nav").toggle();
});
$(window).resize(function() {
    if (window.innerWidth > 768) {
        $("#nav").removeAttr("style");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 30) {
        $(".navbar-fixed-top").addClass("sticky");
    } else {
        $(".navbar-fixed-top").removeClass("sticky");
    }
});
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset()
                .top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
