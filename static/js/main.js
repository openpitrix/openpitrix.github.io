(function ($) {
  var $win = $(window);
  var $header = $('nav.header');

  function init() {
    AOS.init({
      easing: 'ease-in-out',
      duration: 600
    });

    window.onscroll = scrolHandler;
  }

  function scrolHandler() {
    $header.toggleClass('header-fix', $win.scrollTop() > 100);
  }

  init();
})(jQuery);