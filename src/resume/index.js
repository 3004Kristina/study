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

    $("#telephone-input").mask("+7 (999) 999-99-99");
});

const header = document.querySelector('header'),
      header_btn = document.querySelector('.header_btn'),
      about_me = document.querySelector('.about_me'),
      mobile_menu_btn = document.querySelector('.mobile_menu_btn'),
      body = document.querySelector('body'),
      mobile_menu_bg = document.querySelector('.mobile_menu_bg'),
      form = document.querySelector('form'),
      thanks_modal = $('#thanks_modal');


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

$(form).on('submit', (e) => {
    e.preventDefault();
    // const request = new XMLHttpRequest();
    // request.open('POST', '/server.php');
    //
    const formData = new FormData(form);
    // request.send(formData);
    //
    // request.addEventListener('load', () => {
    //     if (request.status === 200) {
    //         thanks_modal.modal('show');
    //         form.reset();
    //     }
    // });

    fetch('/server.php', {
        method: 'POST',
        body: {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email')
        }
    })
        .then(response =>{
            thanks_modal.modal('show');
            form.reset();
        });

    fetch('https://strapi.mx440.ru/resume-zayavkis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email')
        })
    })
        .then(response => response.text())
        .then(txt => console.log(JSON.parse(txt)));
});

// fetch('https://strapi.mx440.ru/test-items',{
//     method: 'POST',
//     body: JSON.stringify({
//         Name: 'fkdffn',
//         Description: 'jfkjjfgbdbkf',
//         Date: '2020-10-06T09:00:00.000Z'
//     })
// })
//     .then(response => response.text())
//     .then(txt => console.log(JSON.parse(txt)));

