var timelineSwiper = new Swiper('.timeline .swiper-container', {
    direction: 'vertical',
    loop: false,
    speed: 1000,
    pagination: '.swiper-pagination',
    paginationBulletRender: function (swiper, index, className) {
        var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
        return '<span class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
        768: {
            direction: 'horizontal',
        }
    }
});


function highlight_map_states() {
    if ($(".states_section").length > 0) {
        $(".states_section .list_states .item .link").hover(function () {
            var a = "#state_" + $(this).text().toLowerCase();
            $(a).attr("class", "state hover")
        }, function () {
            var a = "#state_" + $(this).text().toLowerCase();
            $(a).attr("class", "state")
        })
    }
};


function flip(event) {
    var element = event.currentTarget;
    if (element.className === "card") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        } else {
            element.style.transform = "rotateY(180deg)";
        }
    }
};
