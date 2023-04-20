
$(document).ready(function(){

    $(".card-title").click(function() {
        $(this).hide('slow');
    });

    $(".card-text").click(function(){
      $(this).hide('slow');
    });


});


var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000
})