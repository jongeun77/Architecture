
/* trigger */
$(function(){
$('.trigger').click(function(){
  $(this).toggleClass('active')
  $('.gnb').toggleClass('active')
})
$('.menu a, section').click(function(){
  $('.gnb').removeClass('active')
})
  /* Smooth Scrolling */
  $('.menu a, .gototop').click(function(e){
    $.scrollTo(this.hash || 0, 900)
  })
  
  // Change CSS with Scroll: header, gototop
$(window).scroll(function(){
  if($(window).scrollTop()>50){
    $('header, .gototop').addClass('active')
  }
  else{
    $('header, .gototop').removeClass('active')
  }
})

// Slick.js: plan
$('.history-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})
//SLICK.CSS 가서 css2, js1 다운로드후 링크걸고, 데모에서 맞는 슬라이더 아래의 내용카피후
//$('.내가만든슬라이더디브이름').slick({})안에 넣는다.

// Slick.Js: Project

$('.project-photo').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: 'linear'
})
				

})//end

