(function ($) {
  var $win = $(window);
  var $header = $('nav.header');
  var $menuBtn = $('.menu-btn');

  function init() {
    AOS.init({
      'easing': 'ease-in-out',
      'duration': 800,
      'once': true,
      'anchor-placement': 'bottom-center',
    });

    new SmoothScroll('a[href*="#"]');

    window.onscroll = scrolHandler;

    $menuBtn.on('click', function() {
      $header.toggleClass('active');
    });
  }

  function scrolHandler() {
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