    $(document).ready(function () {
      $('slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        // adaptiveHeight: true,
        dots: true,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        cssEase: 'linear'
      });
    });

    // On swipe event
    $('slider').on('swipe', function (event, slick, direction) {
      console.log(direction);
    })

    //To show only one item at a time
    $('.slider').slick();

    $('.slider').hide();
