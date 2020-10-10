//jQuery(function() {
//    console.log(1);
//});

jQuery(function(){
    jQuery('.hobbies_carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
    });
});

const header = document.querySelector('header'),
      header_btn = document.querySelector('.header_btn'),
      about_me = document.querySelector('.about_me');

window.addEventListener('scroll', () =>{
    header.classList.toggle('scroll_bg', window.scrollY > 0);
});


header_btn.addEventListener('click', () =>{
    about_me.scrollIntoView({
        behavior: 'smooth'
    });
});

