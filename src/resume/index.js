//jQuery(function() {
//    console.log(1);
//});

jQuery(function(){
    jQuery('.hobbies_carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-chevron-circle-right" aria-hidden="true"></button>',
        cssEase: 'linear'
    });
});

const header = document.querySelector('header'),
      header_btn = document.querySelector('.header_btn'),
      about_me = document.querySelector('.about_me'),
      mobile_menu_btn = document.querySelector('.mobile_menu_btn'),
      body = document.querySelector('body'),
      mobile_menu_bg = document.querySelector('.mobile_menu_bg');


window.addEventListener('scroll', () =>{
    header.classList.toggle('scroll_bg', window.scrollY > 100);
});

if (header_btn && about_me){
    header_btn.addEventListener('click', () =>{
        about_me.scrollIntoView({
            behavior: 'smooth'
        });
    });
}


mobile_menu_btn.addEventListener('click', (e) =>{
    e.preventDefault();
    body.classList.toggle('mobile-menu-opened');

});

mobile_menu_bg.addEventListener('click', () =>{
    body.classList.remove('mobile-menu-opened');
});

