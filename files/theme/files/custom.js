jQuery(function($) {

  // Mobile sidebars
  $.fn.expandableSidebar = function(expandedClass) {
    var $me = this;

    $me.on('click', function() {
      if(!$me.hasClass(expandedClass)) {
        $me.addClass(expandedClass);
      } else {
        $me.removeClass(expandedClass);
      }
    });
  }

  var haberdasherController = {
    init: function(opts) {
      var base = this;

      // Add classes to elements
      base._attachEvents();

      setTimeout(function(){
        base._addClasses();
        base._checkCartItems();
      }, 1000);
    },

    _addClasses: function() {
      var base = this;

      // Add placeholder text to inputs
      $('.wsite-form-sublabel').each(function(){
        var sublabel = $(this).text();
        $(this).prev('.wsite-form-input').attr('placeholder', sublabel);
      });

      // Add fullwidth class to gallery thumbs if less than 6
      $('.imageGallery').each(function(){
        if ($(this).children('div').length <= 6) {
          $(this).children('div').addClass('fullwidth-mobile');
        }
      });
    },

    _stickyFooter: function() {
      var stickyFooterMargin = $('#footer-wrap').height();

      $('.wrapper').css('margin-bottom', -stickyFooterMargin);
      $('#footer-wrap, .sticky-footer-push').css('height', stickyFooterMargin);
    },

    _checkCartItems: function() {
      var base = this;

      if($('#wsite-mini-cart').find('li.wsite-product-item').length > 0) {
        $('#wsite-mini-cart').addClass('full');
        base.cartHasItems = true;
      } else {
        $('#wsite-mini-cart').removeClass('full');
        base.cartHasItems = false;
      }
    },

    _attachEvents: function() {
      var base = this;


      $('.hamburger').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('nav-open');
      });

      // Pad header on mobile

      setTimeout(function(){
        if($(window).width() < 992) {
          $(".banner-wrap").css({"padding-top" : $(".header-wrap > .nav-wrap").height() + "px"});
        }
      }, 800);

      // Copy login and search to mobile nav
  		var login = $("#member-login").clone(true),
          search = $("#wsite-header-search-form").clone(true)
  		$("#navmobile .wsite-menu-default").append(login).append(search);


      // Menu text alignment
      if($('.search').is(':empty') || $('.search').css('display') == 'none') {
        $('.menu').css('text-align', 'center');
      }

      // Store category dropdown
      $('.wsite-com-sidebar').expandableSidebar('sidebar-expanded');

      // Search filters dropdown
      $('#wsite-search-sidebar').expandableSidebar('sidebar-expanded');

      // Init fancybox swipe on mobile
      if('ontouchstart' in window) {
        $('body').on('click', 'a.w-fancybox', function() {
          base._initSwipeGallery();
        });
      }

      // Init sticky footer
      if($(window).width() > 992) {
        base._stickyFooter();
      }
    },

    _initSwipeGallery: function() {
      var base = this;

      setTimeout(function(){
        var touchGallery = document.getElementsByClassName('fancybox-wrap')[0];
        var mc = new Hammer(touchGallery);
        mc.on("panleft panright", function(ev) {
          if (ev.type == "panleft") {
            $("a.fancybox-next").trigger("click");
          } else if (ev.type == "panright") {
            $("a.fancybox-prev").trigger("click");
          }
          base._initSwipeGallery();
        });
      }, 500);
    }
  }

  $(document).ready(function(){
    haberdasherController.init();
  });
});