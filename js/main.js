$('.play_yt').click(function () {
    $(this).hide();
    $('.play-youtube').attr('src', 'https://www.youtube.com/embed/nLJzByGd9pg?autoplay=1');
})


const mySwiper = new Swiper('.swiper-container', {
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
    },

});

const menuSwiper = new Swiper('.swiper-container-menu', {
    sliderPerView: 5,
    spaceBetween: 63,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

});


const swiperFeedback = new Swiper('.swiper-feedback', {
    sliderPerView: 3,
    spaceBetween: 30
});



jQuery(function () {
    var j = jQuery; //Just a variable for using jQuery without conflicts
    var addInput = '#qty'; //This is the id of the input you are changing
    var n = 1; //n is equal to 1

    //Set default value to n (n = 1)
    j(addInput).val(n + 'шт.');

    //On click add 1 to n
    j('.plus').on('click', function () {
        j(addInput).val(++n + 'шт.');
    })

    j('.min').on('click', function () {
        //If n is bigger or equal to 1 subtract 1 from n
        if (n >= 1) {
            j(addInput).val(--n + 'шт.');
        } else {
            //Otherwise do nothing
        }
    });
});