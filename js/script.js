  $(document).ready(function(){
    


$('.slider').slick({
  infinite: true,
  slidesToShow: 4, 
  slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1365,
      settings: {
        // slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('.wrap-img').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  dots:true,

dotsClass:'slick-dots2'

});

       });
