import { lenis } from '../../core/lenis.js';
import { cacheAboutElements } from '../../core/cacheElements.js';
import { handleHeaderScroll } from '../../common/header.js';
import { handleBeltScroll } from '../../common/belt.js';
import { handleCoachesParallaxScroll } from './coaches.js';

cacheAboutElements();

let windowInnerHeight = window.innerHeight;
window.addEventListener('resize', () => {
    windowInnerHeight = window.innerHeight;
})

lenis.on('scroll', (e) => {
    handleHeaderScroll(e.scroll, e.velocity);
    handleBeltScroll(e.scroll, windowInnerHeight);
    handleCoachesParallaxScroll(e.scroll, windowInnerHeight);
});

