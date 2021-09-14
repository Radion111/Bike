
  new Swiper('.myswiper', 
  { 

    pagination: {
    el:'.swiper-pagination',

    clickable: true,
    }, 

    autoplay: {
  
    delay: 3000,
    },

    autoHeight: true,
  
    slidesPerView: 1,
    
    loop: true,

  });
// ! использую снипети jquery начала строки начинается с "jq"

  function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();

// ! для анимация скролинга по якорю
// ! перенести в главний макет
$(document).ready(function () {

   $(".header__a").click(function (e) { 
     e.preventDefault();
     $("html,body").animate({
      scrollTop: $($(this).attr("href")).offset().top+"px"
     }, {
       duration:1000,
       easing:"linear",
     });
     return false;
   });
 });







 // ! перенести в главний макет
$(document).ready(function () {

  $(".headertop__a").click(function (e) { 
    e.preventDefault();
    $("html,body").animate({
     scrollTop: $($(this).attr("href")).offset().top+"px"
    }, {
      duration:1000,
      easing:"linear",
    });
    return false;
  });
});


$(document).ready(function () {
  $(".header__a").click(function (e) { 
    e.preventDefault();
    $(".burger-menu,.header").removeClass("active");
  });
}); 

$(document).ready(function() {
  $('.burger-menu').click(function(event) {
     $('.burger-menu,.header').toggleClass('active');
     $('body').toggleClass('lock');
  });
  });