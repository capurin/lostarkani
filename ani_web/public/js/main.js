(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });


  $(document).ready(function () {

    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    };
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active
    $('.slider_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          dots: false
        },
        767: {
          items: 1,
          dots: false
        },
        992: {
          items: 1
        }
      }
    });

    // review-active
    $('.brand_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 2,
          dots: false,
          nav: false,
        },
        767: {
          items: 4,
          dots: false,
          nav: false,
        },
        992: {
          items: 5,
          nav: false
        },
        1200: {
          items: 6,
          nav: false
        },
        1500: {
          items: 6
        }
      }
    });

    // count_dwon
    $('#clock').countdown('2019/12/21', function (event) {
      $(this).html(event.strftime('<div class="countdown_time"><div class="single_countdown"><h3>%D</h3><span>days</span></div><div class="single_countdown"><h3>%H</h3><span>Hours</span></div><div class="single_countdown"><h3>%M</h3><span>Minutes</span></div><div class="single_countdown"><h3>%S</h3><span>Seconds</span></div></div>'));
    });




    // for filter
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // wow js
    new WOW().init();

    // counter 
    $('.counter').counterUp({
      delay: 10,
      time: 10000
    });

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /* magnificPopup img view */
    $('.img-pop-up').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });


    // scrollIt for smoth scroll
    $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: 'linear', // the easing function for animation
      scrollTime: 600, // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: 0 // offste (in px) for fixed top navigation
    });

    // scrollup bottom to top
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '4500', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    // blog-page

    //brand-active
    $('.brand-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 4
        },
        992: {
          items: 7
        }
      }
    });

    // blog-dtails-page

    //project-active
    $('.project-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      // autoplay:true,
      navText: ['<i class="Flaticon flaticon-left-arrow"></i>', '<i class="Flaticon flaticon-right-arrow"></i>'],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 2,
          nav: false
        },
        1200: {
          items: 1,
        },
        1501: {
          items: 2,
        }
      }
    });

    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }

    //about-pro-active
    $('.details_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 1,
          nav: false
        },
        1200: {
          items: 1,
        }
      }
    });


    $(".float-schedule").bind('click', function () {
      var scrollPosition = $(".header-area").offset().top;
      // var scrollPosition = $(".event_area").offset().top;
  
      console.log(scrollPosition);
      $('html, body').animate({
        scrollTop: scrollPosition
      }, 680);

    });

    $(".float-homework").bind('click', function () {
      var scrollPosition = $(".speakers_area").offset().top;
  
      console.log(scrollPosition);
      $('html, body').animate({
        scrollTop: scrollPosition
      }, 680);

    });

    $(".float-notice").bind('click', function () {
      var scrollPosition = $(".event_area").offset().top;
      // var scrollPosition = $(".event_area").offset().top;
  
      console.log(scrollPosition);
      $('html, body').animate({
        scrollTop: scrollPosition
      }, 680);

    });


    


    var clockTarget = document.getElementById("clock");


    function clock() {
        var date = new Date();
    
        // date Object를 받아오고 
        var month = date.getMonth();
    
        // 달을 받아옵니다 
        var clockDate = date.getDate();
    
        // 몇일인지 받아옵니다 
        var day = date.getDay();
    
        // 요일을 받아옵니다. 
        var week = ['일', '월', '화', '수', '목', '금', '토'];
    
        // 요일은 숫자형태로 리턴되기때문에 미리 배열을 만듭니다. 
        var hours = date.getHours();
    
        // 시간을 받아오고 
        var minutes = date.getMinutes();
    
        // 분도 받아옵니다.
        var seconds = date.getSeconds();
    
        // 초까지 받아온후 
        clockTarget .innerText = `${month+1}월 ${clockDate}일 (${week[day]}) ` +
    
        `\n${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
    
        // 월은 0부터 1월이기때문에 +1일을 해주고 
    
        // 시간 분 초는 한자리수이면 시계가 어색해보일까봐 10보다 작으면 앞에0을 붙혀주는 작업을 3항연산으로 했습니다. 
    }
    
    
    
    function init() {
    
    clock();
    
    // 최초에 함수를 한번 실행시켜주고 
    setInterval(clock, 1000);
    
    // setInterval이라는 함수로 매초마다 실행을 해줍니다.
    
    // setInterval은 첫번째 파라메터는 함수이고 두번째는 시간인데 밀리초단위로 받습니다. 1000 = 1초 
    
    }
    
    
    
    init();
  

  });
  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();



  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });
  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });

})(jQuery);