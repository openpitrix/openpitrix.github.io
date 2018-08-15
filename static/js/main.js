(function ($) {
  var $win = $(window);
  var $header = $('nav.header');
  var $sider = $('.sider');
  var $headerMenuBtn = $('.menu-btn');
  var $siderMenuBtn = $('.sider-menu-trigger');

  function init() {
    AOS.init({
      'easing': 'ease-in-out',
      'duration': 800,
      'once': true,
      'anchor-placement': 'bottom-center',
    });

    new SmoothScroll('a[href*="#"]');

    window.onscroll = scrollHandler;

    $headerMenuBtn.on('click', function() {
      if($header.hasClass('l-active')) {
        $header.removeClass('l-active');
        $sider.removeClass('active');
      } else {
        $header.toggleClass('active');
      }
    });

    $siderMenuBtn.on('click', function() {
      $header.addClass('l-active');
      $sider.addClass('active');
    });

    $(".blog-menu_type span").on('click', function() {
      $(this).parent('.blog-menu_type').toggleClass('active');
    });
  }

  function scrollHandler() {
    $header.toggleClass('header-fix', $win.scrollTop() > 100);
  }

  !(function(doc, win) {
      var docEle = doc.documentElement;
      var event = 'onorientationchange' in window ? 'orientationchange' : 'resize';
      var fn = function() {
        var width = docEle.clientWidth;
        width && (docEle.style.fontSize = 100 * (width / 375) + "px");
      };

    win.addEventListener(event, fn, false);
    doc.addEventListener('DOMContentLoaded', fn, false);
  }(document, window));

  init();
})(jQuery);