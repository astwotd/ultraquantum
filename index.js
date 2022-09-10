$(document).ready(function () {
  $('a[href^="#"]').bind("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - -10
    }, 800);
    e.preventDefault();
  });
  return false;
});

//фиксированная шапка при скроле
$("header").removeClass("default");
$(window).scroll(function () {
  if ($(this).scrollTop() > 40) {
    $("header").addClass("default").fadeIn("fast");
  } else {
    $("header").removeClass("default").fadeIn("fast");
  };
});


//активное меню
$(document).ready(function () {
  $(".container div:first a").addClass("active"); //выделяет активную страничку
  $(".container div").click(function (event) {
    $(".container div a").removeClass("active");//удаляет все активные элементы
    $(this).find("a").addClass("active");
  });
});