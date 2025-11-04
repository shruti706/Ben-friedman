$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 800,
    navText: ['<span>&#10094;</span>','<span>&#10095;</span>'],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });
});
// Custom navigation buttons
  $('.custom-next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.custom-prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });

$(document).ready(function(){
  const $arrow = $(".arrow-indicator");

  $(".logo-box").click(function(){
    $(".logo-box").removeClass("active");
    $(this).addClass("active");

    // Move arrow below clicked logo
    const logoOffset = $(this).position().left + ($(this).outerWidth() / 2) - ($arrow.width() / 2);
    $arrow.css("left", logoOffset + "px");
  });

  // Position arrow initially under first logo
  const $firstLogo = $(".logo-box").first();
  const firstOffset = $firstLogo.position().left + ($firstLogo.outerWidth() / 2) - ($arrow.width() / 2);
  $arrow.css("left", firstOffset + "px");
});



