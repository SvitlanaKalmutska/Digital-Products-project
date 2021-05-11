$(function () {
  $(".menu__btn").click(function (event) {
    $(".menu__btn,.menu__list").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
