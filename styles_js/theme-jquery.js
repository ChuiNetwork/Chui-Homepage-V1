/**
 * @author uiocean
 * @version 1.0
 *
 */
(function($) {
    "use strict";
    var MOMB = {};
    $.fn.exists = function() {
        return this.length > 0;
    };


    /*--------------------
      * Menu toogle header
    ----------------------*/
    MOMB.MenuToggleClass = function() {
        $('.navbar-toggler').on('click', function() {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('header').toggleClass('header-toggle');
            }
        })
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    MOMB.MenuClose = function(){
      $('.one-page-nav a').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


    /* ---------------------------------------------- /*
     * Header height
    /* ---------------------------------------------- */
    MOMB.HeaderHeight = function() {
        var HHeight = $('.header-height').outerHeight()
        var HHeightTop = $('.header-top').outerHeight()
        $('.header-height-bar').css("min-height", HHeight);
    }

    /* ---------------------------------------------- /*
     * Mega Menu
    /* ---------------------------------------------- */

    MOMB.MegaMenu = function() {
        var mDropdown = $(".px-dropdown-toggle") 
        mDropdown.on("click", function() {
            $(this).parent().toggleClass("open-menu-parent");
            $(this).next('.dropdown-menu').toggleClass("show");
            $(this).toggleClass("open");
        });
    }


    /*--------------------
    * Typed
    ----------------------*/
    MOMB.typedbox = function() {
        var typedjs = $('.typed');
        if (typedjs.length > 0) {
            typedjs.each(function() {
                var $this = $(this);
                $this.typed({
                    strings: $this.attr('data-elements').split(','),
                    typeSpeed: 150, // typing speed
                    backDelay: 500 // pause before backspacing
                });
            });
        }
    }


    /* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
    MOMB.Gallery = function() {
        var GalleryPopup = $('.lightbox-gallery');
        if (GalleryPopup.length > 0) {
            $('.lightbox-gallery').magnificPopup({
                delegate: '.gallery-link',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-fade',
                fixedContentPos: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after CRE current image
                }
            });
        }
        var VideoPopup = $('.video-btn');
        if (VideoPopup.length > 0) {
            $('.video-btn').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }

    /*--------------------
    * Masonry
    ----------------------*/
    MOMB.masonry = function() {
        var portfolioWork = $('.portfolio-content');
        if (portfolioWork.length > 0) {
            $(portfolioWork).isotope({
                resizable: false,
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
                filter: '*'
            });
            //Filtering items on portfolio.html
            var portfolioFilter = $('.filter li');
            // filter items on button click
            $(portfolioFilter).on('click', function() {
                var filterValue = $(this).attr('data-filter');
                portfolioWork.isotope({
                    filter: filterValue
                });
            });
            //Add/remove class on filter list
            $(portfolioFilter).on('click', function() {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }

    /*--------------------
        * Progress Bar 
    ----------------------*/
    MOMB.ProgressBar = function() {
        $(".skill-bar .skill-bar-in").each(function() {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if (bottom_window > bottom_object) {
                $(this).css({
                    width: progressWidth
                });
            }
        });
    }

    /*-----------------------
    * SVG
    -------------------------*/
    var mySVGsToInject = document.querySelectorAll('.svg_img, .svg_icon');
    MOMB.SVGbx = function() {
        if (mySVGsToInject.length > 0) {
            SVGInjector(mySVGsToInject);
        }
    }
    /*--------------------
        * Wow
    ----------------------*/
    MOMB.wowAni = function() {
        new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 100,
            mobile: !1,
            live: !0
        }).init();
    }
     /*--------------------
        * pieChart
    ----------------------*/
    MOMB.pieChart = function () {
        var $Pie_Chart = $('.pie_chart_in');
        if ($Pie_Chart.length > 0) {
            $Pie_Chart.each(function () {
                var $elem = $(this),
                    pie_chart_size = $elem.attr('data-size') || "160",
                    pie_chart_animate = $elem.attr('data-animate') || "2000",
                    pie_chart_width = $elem.attr('data-width') || "6",
                    pie_chart_color = $elem.attr('data-color') || "#84ba3f",
                    pie_chart_track_color = $elem.attr('data-trackcolor') || "rgba(0,0,0,0.10)",
                    pie_chart_line_Cap = $elem.attr('data-lineCap') || "round",
                    pie_chart_scale_Color = $elem.attr('data-scaleColor') || "true";
                $elem.find('span, i').css({
                    'width': pie_chart_size + 'px',
                    'height': pie_chart_size + 'px',
                    'line-height': pie_chart_size + 'px',
                    'position': 'absolute'
                });
                $elem.easyPieChart({
                    size: Number(pie_chart_size),
                    animate: Number(pie_chart_animate),
                    trackColor: pie_chart_track_color,
                    lineWidth: Number(pie_chart_width),
                    barColor: pie_chart_color,
                    scaleColor: false,
                    lineCap: pie_chart_line_Cap,
                    onStep: function (from, to, percent) {
                        $elem.find('span.middle').text(Math.round(percent));
                    }
                });
               
            });
        }
    }

    /*--------------------
        * count down
    ----------------------*/

    MOMB.CountTimer = function() {
        var $count_timer = $('.count-down');
        var regionalVar = { days: 'Days', day: 'Day', years: 'Years', year: 'Year', hours: 'Hours', hour: 'Hour', minutes: 'Minutes', minute: 'Minute', seconds: 'Seconds', second: 'Second' };
        if ($count_timer.length > 0) {
            $('.count-down').countdown({ regional: regionalVar });
        }
    }

    /*--------------------
        * One Page
    ----------------------*/
    MOMB.one_page = function() {
        //var HHeight = $('.navbar').outerHeight();
        var $one_page_nav = $('.one-page-nav');
        if($one_page_nav.length > 0) {
            $one_page_nav.each(function(){
                $.scrollIt({
                  upKey: 38,             // key code to navigate to the next section
                  downKey: 40,           // key code to navigate to the previous section
                  easing: 'linear',      // the easing function for animation
                  scrollTime: 600,       // how long (in ms) the animation takes
                  activeClass: 'active', // class given to the active nav element
                  onPageChange: null,    // function(pageIndex) that is called when page is changed
                  topOffset: -70           // offste (in px) for fixed top navigation
                });
            });
        }
    }

    // Window on Load
    $(window).on("load", function() {
        MOMB.masonry();
    });
    // Document on Ready
    $(document).ready(function() {
        MOMB.MenuToggleClass(),
        MOMB.MenuClose(),
        MOMB.Gallery(),
        MOMB.HeaderHeight(),
        MOMB.MegaMenu(),
        MOMB.ProgressBar(),
        MOMB.typedbox(),
        MOMB.SVGbx(),
        MOMB.wowAni(),
        MOMB.pieChart(),
        MOMB.CountTimer(),
        MOMB.one_page();
    });

    // Document on Scrool
    $(window).scroll(function() {
        MOMB.ProgressBar();
    });

    // Window on Resize
    $(window).resize(function() {
        MOMB.HeaderHeight();
    });

})(jQuery);