import { lenis } from '../../core/lenis.js';
import { cacheIndexElements } from '../../core/cacheElements.js';
import { handleHeaderScroll } from '../../common/header.js';
import { handleBeltScroll } from '../../common/belt.js';
import { handleHeroScroll } from './hero.js';
import { initializeScratchCanvas } from './scratch.js';

cacheIndexElements();
initializeScratchCanvas();

let windowInnerHeight = window.innerHeight;
window.addEventListener('resize', () => {
    windowInnerHeight = window.innerHeight;
})

lenis.on('scroll', (e) => {
    handleHeaderScroll(e.scroll, e.velocity);
    handleBeltScroll(e.scroll, windowInnerHeight);
    handleHeroScroll(e.scroll, windowInnerHeight);
});

