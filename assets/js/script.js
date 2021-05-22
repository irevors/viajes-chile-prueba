// wait for DOM ready
$(document).ready(function () {
  // BOOTSTRAP TOOLTIP
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Smooth scroll
  $('a').on('click', function (event) {
    event.preventDefault();
    let hash = this.hash;

    //animate
    $('html').animate(
      {
        scrollTop: $(hash).offset().top - 50,
      },
      800
    );
  });
});
