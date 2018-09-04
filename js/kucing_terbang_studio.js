$(document).ready(function() {
    $(window).on("load", function() {
    preloaderSlideupTime = 1000;
    function hidePreloader() {
    var preloader = $('.wrapper-dark');
    preloader.slideUp(preloaderSlideupTime);
    }
    hidePreloader();
    });
    });
    $(document).ready(function() {
        $('#media').carousel({
          pause: true,
          interval: 1000,
        });
      });