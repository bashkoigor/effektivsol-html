// Locale switcher
$(".dropdown-list .dropdown .title").click(function () {
    $(this).parent().toggleClass("closed");
});

// Decrease, increase product amount
$(document).on('click', '.product-amount-increase', (e) => {
    let x = $( e.currentTarget ).siblings(".product-amount input").val();
    $( e.currentTarget ).siblings(".product-amount input").attr('value', ++x);
});
$(document).on('click', '.product-amount-decrease', (e) => {
    let x = $( e.currentTarget ).siblings(".product-amount input").val();
    if (x > 1) {
        $( e.currentTarget ).siblings(".product-amount input").attr('value', --x);
    }
});

// Recommended products Carousel
const obRecommended1 = document.querySelector("#recommended1");
if (obRecommended1) {
    const recommended1 = new Carousel(obRecommended1, {
        slidesPerPage: 1,
        center: false
    });
}

// Our team Carousel
const obOurTeam = document.querySelector("#our_team");
if (obOurTeam) {
    const ourTeam = new Carousel(obOurTeam, {
        slidesPerPage: 1,
        center: false
    });
}

// For product page
if (document.querySelector(".product")) {
    // Product Carousel
    const productCarousel = new Carousel(document.querySelector("#product-carousel"), {
        Dots: false,
    });
    const thumbCarousel = new Carousel(document.querySelector("#product-thumb-carousel"), {
        Sync: {
            target: productCarousel,
            friction: 0,
        },
        Dots: false,
        Navigation: false,
        center: true,
        slidesPerPage: 1,
        infinite: false,
    });
}