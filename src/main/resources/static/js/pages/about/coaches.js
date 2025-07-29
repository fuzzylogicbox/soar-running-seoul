import { coachesWrapperElement , coachImages , coachesTop_initial, coachesBottom_initial } from '../../core/cacheElements.js';

export function handleCoachesParallaxScroll (currentScrollY, windowInnerHeight) {
    if(coachesWrapperElement && coachImages && coachImages.length > 0) {
        const startPoint = coachesTop_initial -windowInnerHeight;
        const endPoint = coachesBottom_initial;

        // 현재 스크롤 위치가 애니메이션 범위 내에 얼마나 있는지 계산 후 0 ~ 1 사이 값으로 클램핑.
        let scrollProgress = (currentScrollY - startPoint) / (endPoint - startPoint);
        scrollProgress = Math.max(0, Math.min(1,scrollProgress));

        // 0 ~ 1 사이로 클램핑 된 값을 translateY에 적용할 (-50% ~ 50%) 값으로 매핑.
        const translateYValue = 50 + scrollProgress * (-100);

        // 각각의 .coachImg 요소에 translateY 스타일 적용
        coachImages.forEach(img => {
            img.style.transform = `translateY(${translateYValue}%)`;
        });
    } else {
        console.warn('coaches 관련 요소 찾을 수 없음.')
    }
}