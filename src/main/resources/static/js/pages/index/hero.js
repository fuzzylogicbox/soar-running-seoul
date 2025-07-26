import { heroElement, heroFilterElement, heroTop_initial } from '../../core/cacheElements.js';

export function handleHeroScroll(currentScrollY, windowInnerHeight) {

    if (heroElement && heroFilterElement) {
      const scale = 1 + ((currentScrollY - heroTop_initial) / windowInnerHeight) * 2.3;
      if (currentScrollY >= heroTop_initial) {
        heroFilterElement.style.transform = `translateY(${currentScrollY - heroTop_initial}px) scale(${scale})`;

        if (currentScrollY >= heroTop_initial * 1.5) {
          const opacity = 4 - scale;
          heroFilterElement.style.opacity = opacity.toFixed(2);
        } else {
          heroFilterElement.style.opacity = '';
        }
      } else {
        heroFilterElement.style.transform = 'translateY(0px) scale(1)';
        heroFilterElement.style.opacity = '';
      }
    } else {
      console.warn("hero 요소 찾을 수 없음.");
    }
}