$(function () {

  $('.blog__slaider').slick({
    arrows: false,
    dots: true,
  });

  $('.menu, .nav a').on('click', function () {
    $('.header__wrap').toggleClass('header__wrap--active');
  });

  $('.nav a').on('click', function (e) {
    var $checkbox = $('#hi:checkbox');
    if (e.target !== $checkbox[0]) {
      $checkbox.prop('checked', !$checkbox.prop('checked'));
    }
  });

  $('.header__wrap, .footer').on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(window).on("scroll", function () {
    $('.header__wrap').toggleClass('header__scrolled', $(this).scrollTop() >= $(window).height());
  });

  var mixer = mixitup('.portfolio__items');
});