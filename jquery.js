

$(window).on('scroll', function() {
     if($(window).scrollTop() > 150) {
         $("#menu").addClass("menuOpacity");
}    else {
        $("#menu").removeClass("menuOpacity");
        }
})


$(document).ready(function(){
  $("a").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
});
