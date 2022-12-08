// Locale switcher
$(".dropdown-list .dropdown .title").click(function () {
    $(this).parent().toggleClass("closed");
});

const obRecommended1 = document.querySelector("#recommended1");
if (obRecommended1) {
    const recommended1 = new Carousel(obRecommended1, {
        slidesPerPage: 1,
        center: false
    });
}