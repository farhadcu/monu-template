$(document).ready(function(){
    // slick for slider-active
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots:false,
        autoplay:true,
        slidesToScroll: 1,
      });

    // slick for testimonial-active
    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots:true,
        autoplay:true,
        slidesToScroll: 1,
      });

    // slick for brand-active
    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 5,
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