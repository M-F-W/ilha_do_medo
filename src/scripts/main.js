document.addEventListener("DOMContentLoaded", function () {
    const findHero = document.querySelector(".hero");
    const heroHeight = findHero.clientHeight;

    window.addEventListener("scroll", function () {
        const actualPos = window.scrollY;

        if (actualPos < heroHeight) {
            hideHeader();
        } else {
            showHeader();
        }
    });
});

function hideHeader() {
    const header = document.querySelector(".header");
    header.classList.add("header--is-hidden");
}

function showHeader() {
    const header = document.querySelector(".header");
    header.classList.remove("header--is-hidden");
}
