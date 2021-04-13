
$(document).ready(function () { 
  function updateScroll() {
    if ($(window).scrollTop() >= 100) {
      $("nav").addClass('sticky');
    } else {
      $("nav").removeClass("sticky");
    }
  }
  
  
  $(function () {
    $(window).scroll(updateScroll);
    updateScroll();
  });
  });



$(document).ready(function () {
    $(".navbar-toggler").click(function () {
      $(this).toggleClass("i-change");
    });
});

$(document).ready(function(){
  $('.dropmenu').hide();
  $(".main-menu li .arrow").click(function () {
      $(this).parent().children(".dropmenu").toggle();
      $(this).toggleClass("opne-menu");
  })
});


$(document).ready(function () {
  $('.banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
  });
});


$(document).ready(function () {
  $('.s-slide').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
        responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    
    ]
  });
});