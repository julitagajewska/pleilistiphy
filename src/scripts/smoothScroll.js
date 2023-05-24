var current = 0;
var target = 0;
var ease = 0.05;
var containerHeight = 0;

const scrollContainer = document.querySelector(".scroll-container-outer");
const container = document.querySelector(".scroll-container-inner");

const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
}

const setTransform = (el, transform) => {
    el.style.transform = transform;
}

const setupAnimation = () => {
    containerHeight = container.getBoundingClientRect().height;
    smoothScroll();
}

const smoothScroll = () => {
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2));
    target = scrollContainer.scrollTop;
    setTransform(container, `translateY(${-current}px)`);
    requestAnimationFrame(smoothScroll);
}

setupAnimation();