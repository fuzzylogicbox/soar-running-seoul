export const lenis = new window.Lenis({
    duration: 2, // 스크롤 애니메이션 지속 시간 (초)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 기본 이징 함수
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 0.5, // 마우스 휠 스크롤 속도 배율 (원한다면 조정)
    smoothTouch: false, // 터치 기기에서 부드러움 활성화 여부 (true 시 touchmove 이벤트 방해 가능성)
    touchMultiplier: 2, // 터치 스크롤 속도 배율 (원한다면 조정)
    infinite: false,
});

export function startLenisLoop() {
    requestAnimationFrame(function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    });
};

