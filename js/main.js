$(document).ready(function(){
    // slick 
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots:false,
        autoplay:true,
        slidesToScroll: 1,
      });

      //counter js
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  






})