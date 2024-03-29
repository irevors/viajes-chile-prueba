/*  
Bootstrap JS components:
- Loading Spinner
- Scrollspy
- Tooltip
- Carousel

*/
// DISPLAYS BOOTSTRAP SPINNER ON PAGE LOAD
$(window).on('load', function () {
  $('#loading-spinner').fadeTo(1500, 0, function () {
    $(this).css('z-index', '-1');
  });
});

// wait for DOM ready
$(document).ready(function () {
  // BOOTSTRAP SCROLLSPY: change nav active state based on position
  $('body').scrollspy({
    target: '#myNav',
    offset: 58,
  });
  // BOOTSTRAP TOOLTIP
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // navbar styles on scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('navbar-scrolled');
    } else {
      $('.navbar').removeClass('navbar-scrolled');
    }
  });

  // Smooth scroll
  $('a').on('click', function (event) {
    event.preventDefault();
    let hash = this.hash;

    //animate
    $('html').animate(
      {
        scrollTop: $(hash).offset().top - 58,
      },
      800
    );
  });
});
