$(document).ready(function () {

    /*------------------------------------------------
        PAGE SLIDER
    --------------------------------------------------*/
    new Swiper('.slider-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    /*------------------------------------------------
        SERVICES SLIDER
    --------------------------------------------------*/
    new Swiper(".services-slider", {
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            650: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 3
            },
            1199: {
                slidesPerView: 4
            }
        }
    });

    /*------------------------------------------------
        OPEN SEARCH
    --------------------------------------------------*/
    $(".open-search").click(function () {
        const searchWrapper = $(".search-wrapper");
        searchWrapper.css("visibility", "visible");
        $("body").css("overflow", "hidden");
    });

    /*------------------------------------------------
        PROJECTS FILTER
    --------------------------------------------------*/
    
    $(".project-filters ul li").click(function(){
        const li = $(".project-filters ul").find("li.active");
        li.removeClass("active");
        $(this).addClass("active");
    });
    new Filterizr('.project-container', {});

});

window.onclick = function (event) {
    const searchWrapper = document.getElementById("search-wrapper");
    if (event.target == searchWrapper) {
        searchWrapper.style.visibility = "hidden";
        document.getElementsByTagName("body")[0].style.overflow = "visible";
    }

}