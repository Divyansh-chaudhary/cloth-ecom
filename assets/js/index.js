AOS.init();

// header top dropdown currency codes
$(document).ready(() => {
  // preloader
  $(".preloader-container").css({ display: "none" });

  var selected_currency = $(".selected-currency").text();
  var dropdown_items = $(".dropdown-item");
  for (let i = 0; i <= 3; i++) {
    if (selected_currency === dropdown_items.eq(i).text()) {
      dropdown_items
        .eq(i)
        .css({ fontWeight: "bolder", backgroundColor: "rgb(0, 177, 255)" });
      break;
    }
  }
});

$(".dropdown-item").mouseover(() => {
  $(".dropdown-item").css({ backgroundColor: "black" });
});

$(".dropdown-menu").mouseleave(() => {
  var selected_currency = $(".selected-currency").text();
  var dropdown_items = $(".dropdown-item");
  for (let i = 0; i <= 3; i++) {
    if (selected_currency === dropdown_items.eq(i).text()) {
      dropdown_items
        .eq(i)
        .css({ fontWeight: "bolder", backgroundColor: "rgb(0, 177, 255)" });
      break;
    }
  }
});

$(".dropdown span").click(() => {
  $(".dropdown-menu").slideToggle("fast");
});

var fa_arrow = 0;
$(document).on("click", function (event) {
  var $trigger = $(".dropdown");
  if ($trigger !== event.target && !$trigger.has(event.target).length) {
    $(".dropdown-menu").slideUp("fast");
  }
  if (!fa_arrow) {
    $(".fa-angle-down").css({ transform: "rotate(180deg)" });
    fa_arrow--;
  } else {
    $(".fa-angle-down").css({ transform: "rotate(0deg)" });
    fa_arrow++;
  }
});

$(".dropdown-item").click(function (event) {
  var currency = event.target.innerText;
  $(".dropdown .selected-currency").text(currency);
  var selected_currency = $(".selected-currency").text();
  var dropdown_items = $(".dropdown-item");
  dropdown_items.css({ fontWeight: "500" });
  for (let i = 0; i <= 3; i++) {
    if (selected_currency === dropdown_items.eq(i).text()) {
      dropdown_items
        .eq(i)
        .css({ fontWeight: "bolder", backgroundColor: "rgb(0, 177, 255)" });
      break;
    }
  }
});

var nav_product = 0;
var nav_blog = 0;
var nav_other = 0;
$(".nav-product-opener").click(function (event) {
  $(".nav-product-item").slideToggle("fast");
  if (!nav_product) {
    this.classList.remove("fa-plus");
    this.classList.add("fa-minus");
    nav_product--;
  } else {
    this.classList.remove("fa-minus");
    this.classList.add("fa-plus");
    nav_product++;
  }
});
$(".nav-blog-opener").click(function (event) {
  $(".nav-blog-item").slideToggle("fast");
  if (!nav_blog) {
    this.classList.remove("fa-plus");
    this.classList.add("fa-minus");
    nav_blog--;
  } else {
    this.classList.remove("fa-minus");
    this.classList.add("fa-plus");
    nav_blog++;
  }
});
$(".nav-last-item-opener").click(function (event) {
  $(".nav-last-item").slideToggle("fast");
  if (!nav_other) {
    this.classList.remove("fa-plus");
    this.classList.add("fa-minus");
    nav_other--;
  } else {
    this.classList.remove("fa-minus");
    this.classList.add("fa-plus");
    nav_other++;
  }
});

$(".menu-btn").click(function () {
  $(".nav-items").slideToggle("fast");
});

$(window).scroll(function () {
  if (pageYOffset > 500) {
    document.getElementsByTagName("nav")[0].classList.add("nav");
    document.getElementsByTagName("nav")[1].classList.add("nav");
    $("div.top-arrow").css({ opacity: "1" });
  } else {
    document.getElementsByTagName("nav")[0].classList.remove("nav");
    document.getElementsByTagName("nav")[1].classList.remove("nav");
    $("div.top-arrow").css({ opacity: "0" });
  }
});

$(".latest-product-top ul li").click(function (event) {
  li = $(".latest-product-top ul li");
  for (i = 0; i < li.length; i++) {
    $(".latest-product-top ul li")[i].classList.remove("active");
  }
  $(this).addClass("active");
});

// category.html;
$(".short-by .f-dropdown").click(() => {
  if (document.querySelector(".featured-ul").style.display == "none") {
    $(".short-by ul").slideDown("fast");
    $(".short-by .fa-chevron-down").css({ transform: "rotate(180deg)" });
  } else {
    $(".short-by ul").slideUp("fast");
    $(".short-by .fa-chevron-down").css({ transform: "rotate(0deg)" });
  }
});

$(".featured-ul li").mouseover(() => {
  $(".featured-ul li").css({ backgroundColor: "white" });
});

$(".featured-ul li").mouseleave(() => {
  var category = $(".f-dropdown span").text();
  var dropdown_items = $(".featured-ul li");
  for (let i = 0; i <= 3; i++) {
    if (category === dropdown_items.eq(i).text()) {
      dropdown_items
        .eq(i)
        .css({ fontWeight: "bolder", backgroundColor: "rgb(0, 177, 255)" });
      break;
    }
  }
});
$(".dropdown-item").click(function (event) {
  var currency = event.target.innerText;
  $(".dropdown .selected-currency").text(currency);
  var selected_currency = $(".selected-currency").text();
  var dropdown_items = $(".dropdown-item");
  dropdown_items.css({ fontWeight: "500" });
  for (let i = 0; i <= 3; i++) {
    if (selected_currency === dropdown_items.eq(i).text()) {
      dropdown_items
        .eq(i)
        .css({ fontWeight: "bolder", backgroundColor: "rgb(0, 177, 255)" });
      break;
    }
  }
});

$(".featured-ul li").click(function (event) {
  var category_name = event.target.innerText;
  $(".f-dropdown span").text(category_name);
  var category_name = $(".f-dropdown span").text();
  var li = $(".featured-ul li");
  li.css({ fontWeight: "500" });
  for (let i = 0; i <= 3; i++) {
    if (category_name === li.eq(i).text()) {
      li.eq(i).css({
        fontWeight: "bolder",
        backgroundColor: "rgb(0, 177, 255)",
      });
      break;
    }
  }
});
