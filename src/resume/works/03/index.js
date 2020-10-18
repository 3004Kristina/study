// jQuery(function(){
//     jQuery('.main_content_carausel').slick({
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         fade: true,
//         prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></button>',
//         nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-chevron-circle-right" aria-hidden="true"></button>',
//         cssEase: 'linear'
//     });
//
// });

$(function() {
    // Owl Carousel
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
});

