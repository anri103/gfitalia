// Плавный скролл к якорям

$(document).ready(function(){
$('a[href*=#]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
});
return false;
});

// Плавающая шапка

$(window).scroll(function() {
                var top = $(document).scrollTop();
                if (top < 300) $(".top").removeClass('top-fixed');
                else $(".top").addClass('top-fixed');
            });

// Развёртывание подменю по клику

let servicesMenu = document.querySelector('.top-menu');
let menuItems = servicesMenu.querySelectorAll('li');
let menuItemsWithChildren = [];
menuItems.forEach((item) => {
    if(item.classList.contains('has-children')){
        menuItemsWithChildren.push(item);
    }
});
menuItemsWithChildren.forEach((item) => {
    let icon = document.createElement('i');
    icon.classList.add('arrow');
    item.appendChild(icon);
    let itemChild = item.querySelector('.dropdown');
    icon.addEventListener('click', () => {
        itemChild.classList.toggle('dropdown-shown');
    });
});

// Форматирование чисел в ценах

Array.from(document.getElementsByClassName('digit'), e => e.textContent = e.textContent.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

// Кнопки +/- в поле количества

$(function() {
 
  (function quantityProducts() {
    var $quantityArrowMinus = $(".form-qty .minus");
    var $quantityArrowPlus = $(".form-qty .plus");
    var $quantityNum = $(".qty-input");
	const quantityStep = +$quantityNum.attr( "step" ) || 1
  const quantityMax  = +$quantityNum.attr( "max" ) || 10
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > quantityStep) {
        $quantityNum.val(+$quantityNum.val() - quantityStep);
      }
    }
 
    function quantityPlus() {
      if ($quantityNum.val() < quantityMax) {
        $quantityNum.val(+$quantityNum.val() + quantityStep);
      }
    }
  })();
 
});

// Маски полей

$(document).ready(function () {
$(".phonemask").mask("+7 (999) 999-99-99");
$(".numbermask").mask("9?9");
$(".datemask").mask("99.99.9999");
});

// Включаем срабатывание модальных окон

let popupMenu = document.querySelector('#menu-opener');
let buttonMenu = document.querySelectorAll('.button-menu');

buttonMenu.forEach(item => {
	item.addEventListener('click', function(){
		popupMenu.checked = true;
	});
});

let popupSearch = document.querySelector('#search-block-opener');
let buttonSearch = document.querySelectorAll('.button-search');

buttonSearch.forEach(item => {
	item.addEventListener('click', function(){
		popupSearch.checked = true;
	});
});

let popupSubscribe = document.querySelector('#popup-subscribe-opener');
let buttonSubscribe = document.querySelectorAll('.button-subscribe');

buttonSubscribe.forEach(item => {
	item.addEventListener('click', function(){
		popupSubscribe.checked = true;
	});
});

let popupFilters = document.querySelector('#popup-filters-opener');
let buttonFilters = document.querySelectorAll('.button-filters');

buttonFilters.forEach(item => {
	item.addEventListener('click', function(){
		popupFilters.checked = true;
	});
});


// Включаем Slick-slider

$('.ad-slider').slick({
  slidesToShow: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  draggable: false
});

$(document).ready(function(){
$('.hello-slider').slick({
  slidesToShow: 1,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000
});
});

$('.products-slider').slick({
  slidesToShow: 4,
  dots: true,
  arrows: true,
  infinite: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3
      }
    },
	{
      breakpoint: 560,
      settings: {
        slidesToShow: 2
      }
    },
	{
      breakpoint: 350,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.product-gallery').slick({
  slidesToShow: 1,
  dots: true,
  arrows: true
});

$('.locations-slider').slick({
  slidesToShow: 1,
  dots: true,
  arrows: true,
  draggable: false
});

$('.gallery-slider').slick({
  slidesToShow: 5,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 4
      }
    },
	{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
	{
      breakpoint: 560,
      settings: {
        slidesToShow: 2
      }
    },
	{
      breakpoint: 390,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// Включаем зум галереи

$(document).ready(function(){
	$('.product-gallery .slide').zoom();
});

// Включаем диапозон цен

$(".js-range-slider").ionRangeSlider();

// Центрируем активный пункт меню блога

// document.addEventListener('DOMContentLoaded', () => {
//   const $navItems = document.querySelector('.blog-cats-list');
//   const $navItemActive = $navItems.querySelector('.blog-cats-list .blog-cat-current');
//   const navItemsRect = $navItems.getBoundingClientRect();
//   const navItemActiveRect = $navItemActive.getBoundingClientRect();
//   const navItemsLeft = navItemActiveRect.left - navItemsRect.left + (navItemActiveRect.width - navItemsRect.width) / 2;
//   $navItems.scrollLeft = navItemsLeft;
// });

// Спойлеры

let sp_content=$('.sp_content'),sp_title=$('.sp_title');
sp_content.hide();
sp_title.on('click',function(){
 let inx=$('.sp_title').index(this);
 $(sp_content[inx]).slideToggle(100)
 $(sp_title[inx]).toggleClass( "sp_open" );
})

// Включаем скролл в попапе


$(function()
{
	var settings = {
		resizeSensor: true,
		contentWidth: '0px'
	};
	var pane = $('.popup-scroll')
	pane.jScrollPane(settings);
	//var contentPane = pane.data('jsp').getContentPane();
	var i = 1;

});

// Подгрузка статей по кнопке "показать еще"

$(document).ready(function () {

  $(document).on('click', '.load-more', function () {

    const targetContainer = $('.blog-grid'),
      url = $('.load-more').attr('data-url');

    if (url !== undefined) {
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'html',
        success: function (data) {
          $('.load-more').remove();
          $('.bx-pagination').html("");

          const elements = $(data).find('.blog-card'), 
            pagination = $(data).find('.load-more'), 
            numpagination = $(data).find('.pagination')
          targetContainer.append(elements)   
          targetContainer.append(pagination)
          $('.bx-pagination').html(numpagination)

        }
      })
    }

  });

});


