import { scratchAreaContainer, scratchCanvasElement, scratchFilterElement, scratchCtx } from '../../core/cacheElements.js';

export function initializeScratchCanvas () {
    // 캐싱된 스크래치 관련 요소들이 있는지 다시 확인
    if (!scratchAreaContainer || !scratchCanvasElement || !scratchFilterElement || !scratchCtx) {
        return; // 요소가 없으면 초기화 중단
    }

    let lastX_scratch = null;
    let lastY_scratch = null;

    // 캔버스 해상도 및 크기 설정 함수 (scratchAreaContainer 및 scratchFilter 크기 사용 + High-DPI 지원)
    const setCanvasSize = () => {
        // scratchAreaContainer의 CSS에 의해 결정된 표시 크기
        const rect = scratchAreaContainer.getBoundingClientRect();
        // 높이를 .scratchFilter의 렌더링된 높이로 설정
        const filterRect = scratchFilterElement.getBoundingClientRect();

        const dpi = window.devicePixelRatio || 1;

        // 캔버스의 내부 그리기 영역 크기 설정 (물리적 픽셀 수) - 정수
        scratchCanvasElement.width = Math.round(rect.width * dpi); // 너비는 컨테이너 기준
        scratchCanvasElement.height = Math.round(filterRect.height * dpi); // <-- filterRect.height 사용 (소수점은 반올림되어 정수로 적용)


        // 캔버스의 실제 화면 표시 크기를 CSS 픽셀 기준으로 다시 설정 (High-DPI 지원)
        scratchCanvasElement.style.width = `${rect.width}px`;
        scratchCanvasElement.style.height = `${filterRect.height}px`; // <-- filterRect.height 사용 (소수점 포함될 수 있음)

        // 컨텍스트 스케일 설정 (크기 변경 후 다시 설정 필요)
        scratchCtx.scale(dpi, dpi);

        // 그리기 스타일 다시 설정 (스케일 적용 후)
        // 선 굵기도 dpi에 맞춰 조정
        const baseLineWidth = 4;
        const baseRectWidth = 1888;
        const scaleFactor = rect.width / baseRectWidth;

        scratchCtx.lineWidth = baseLineWidth * scaleFactor;
        scratchCtx.lineCap = 'round';
        scratchCtx.lineJoin = 'round';
        scratchCtx.strokeStyle = '#FF6600';

        // 캔버스 크기 변경시 마지막 위치 초기화.
        lastX_scratch = null;
        lastY_scratch = null;
    };

    // 초기 캔버스 높이를 .scratchFilter 높이로 설정 및 리사이즈 이벤트 등록
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // --- 스크래치 마우스 이벤트 핸들러 ---
    scratchCanvasElement.addEventListener('mousemove', (e) => {
        if (e.touches && e.touches.length > 0) return; // 터치 중이면 마우스 이벤트 무시

        const canvasRect = scratchCanvasElement.getBoundingClientRect();
        const x = e.clientX - canvasRect.left;
        const y = e.clientY - canvasRect.top;

        if (lastX_scratch === null || lastY_scratch === null) {
            lastX_scratch = x;
            lastY_scratch = y;
            return;
        }

        scratchCtx.beginPath();
        scratchCtx.moveTo(lastX_scratch, lastY_scratch);
        scratchCtx.lineTo(x, y);
        scratchCtx.stroke();

        lastX_scratch = x;
        lastY_scratch = y;
    });

    scratchCanvasElement.addEventListener('mouseleave', () => {
        lastX_scratch = null;
        lastY_scratch = null;
        scratchCtx.beginPath();
    });

    // --- 스크래치 터치 이벤트 핸들러 ---
    scratchCanvasElement.addEventListener('touchmove', (e) => {
        e.preventDefault();

        const touch = e.touches[0];
        if (!touch) return;

        const canvasRect = scratchCanvasElement.getBoundingClientRect();
        const x = touch.clientX - canvasRect.left;
        const y = touch.clientY - canvasRect.top;

        if (lastX_scratch === null || lastY_scratch === null) {
            lastX_scratch = x;
            lastY_scratch = y;
            return;
        }

        scratchCtx.beginPath();
        scratchCtx.moveTo(lastX_scratch, lastY_scratch);
        scratchCtx.lineTo(x, y);
        scratchCtx.stroke();

        lastX_scratch = x;
        lastY_scratch = y;
    });

    scratchCanvasElement.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        if (touch) {
            const canvasRect = scratchCanvasElement.getBoundingClientRect();
            lastX_scratch = touch.clientX - canvasRect.left;
            lastY_scratch = touch.clientY - canvasRect.top;
        }
    });

    scratchCanvasElement.addEventListener('touchend', () => {
        lastX_scratch = null;
        lastY_scratch = null;
        scratchCtx.beginPath();
    });

    scratchCanvasElement.addEventListener('touchcancel', () => {
        lastX_scratch = null;
        lastY_scratch = null;
        scratchCtx.beginPath();
    });

    // console.log("Scratch canvas initialized.");
};