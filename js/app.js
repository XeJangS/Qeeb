(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const circle = new CircleType(document.querySelector(".circle-main__text"));
    circle.radius(60);
    const sliderContainer = document.querySelector(".categories__slider");
    const slide = document.querySelectorAll(".slider-categories__item");
    const prev = document.querySelector(".slider-categories__arrow-l");
    const next = document.querySelector(".slider-categories__arrow-r");
    let indexNum = 0;
    function moveTo(index) {
        sliderContainer.style.transform = `translateX(-${index * 275}px)`;
        indexNum = index;
    }
    function nextSlide() {
        indexNum = (indexNum + 1) % slide.length;
        moveTo(indexNum);
    }
    function prevSlide() {
        indexNum = (indexNum - 1 + slide.length) % slide.length;
        moveTo(indexNum);
    }
    prev.addEventListener("click", prevSlide);
    next.addEventListener("click", nextSlide);
    const sevenButton = document.querySelector(".seven-days");
    const thirtyButton = document.querySelector(".thirty-days");
    sevenButton.addEventListener("click", (function(e) {
        sevenButton.classList.add("_active");
        thirtyButton.classList.remove("_active");
    }));
    thirtyButton.addEventListener("click", (function(e) {
        thirtyButton.classList.add("_active");
        sevenButton.classList.remove("_active");
    }));
    const tranding_sliderContainer = document.querySelector(".tranding__slider");
    const tranding_slide = document.querySelectorAll(".slider-tranding__item");
    const tranding_prev = document.querySelector(".slider-tranding__arrow-l");
    const tranding_next = document.querySelector(".slider-tranding__arrow-r");
    let tranding_indexNum = 0;
    function tranding_moveTo(index) {
        tranding_sliderContainer.style.transform = `translateX(-${index * 280}px)`;
        tranding_indexNum = index;
    }
    function tranding_nextSlide() {
        tranding_indexNum = (tranding_indexNum + 1) % tranding_slide.length;
        tranding_moveTo(tranding_indexNum);
    }
    function tranding_prevSlide() {
        tranding_indexNum = (tranding_indexNum - 1 + tranding_slide.length) % tranding_slide.length;
        tranding_moveTo(tranding_indexNum);
    }
    tranding_prev.addEventListener("click", tranding_prevSlide);
    tranding_next.addEventListener("click", tranding_nextSlide);
    window["FLS"] = true;
    isWebp();
    menuInit();
})();