(function ($) {
  var $win = $(window);
  var $header = $('nav.header');

  function init() {
    AOS.init({
      'easing': 'ease-in-out',
      'duration': 800,
      'once': true,
      'anchor-placement': 'bottom-center',
    });

    new SmoothScroll('a[href*="#"]');

    window.onscroll = scrolHandler;
  }

  function scrolHandler() {
    $header.toggleClass('header-fix', $win.scrollTop() > 100);
  }

  init();
})(jQuery);