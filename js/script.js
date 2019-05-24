$(document).ready(function() {
  // toggler btn
  $('.navbar-toggler').click(function() {
    $('.navbar-toggler').toggleClass('change');
  });

  // sticky navbar less padding
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 705) {
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
      $('#back-to-top').removeClass('d-none');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
      $('#back-to-top').addClass('d-none');
    }
  });

  // smooth scroll
  $('.nav-item a, .header-link, #back-to-top').click(function(link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 25
        },
        1000
      );
  });

  // ripples
  $('#header, .info').ripples({
    dropRadius: 20,
    perturbance: 0.01
  });
  // magnific popup
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
    // other options
  });
});
