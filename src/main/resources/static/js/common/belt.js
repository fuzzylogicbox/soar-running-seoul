import { beltElement, tapeBeltElement, beltTop_initial } from '../core/cacheElements.js';

export function handleBeltScroll(currentScrollY, windowInnerHeight) {
    if(beltElement && tapeBeltElement) {
        const startScroll = beltTop_initial - windowInnerHeight;

        if(currentScrollY >= startScroll) {
            const offset = currentScrollY - startScroll;
            tapeBeltElement.style.transform = `translateX(-${offset}px)`;
        } else {
            tapeBeltElement.style.transform = 'translateX(0px)';
        }
    } else {
        console.warn('belt 요소 찾을 수 없음');
    }
}