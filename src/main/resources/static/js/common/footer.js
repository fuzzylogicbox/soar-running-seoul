import { clockElement } from '../core/cacheElements.js';

export function initializeClock () {
    if(clockElement) {

        // 시계 업데이트 및 콜론 깜빡임 처리 함수
        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            const ampm = hours >= 12 ? 'PM' : 'AM';

            // 00~24를 01~12으로 시간표기 변환
            hours = hours % 12;
            hours = hours ? hours : 12;

            const formattedMinutes = minutes.toString().padStart(2,'0');

            // 콜론 깜빡임 (초가 짝수일 때만 표시)
            const colon = (seconds % 2 === 0 ) ? ':' : ' ';

            const timeString =`${hours}${colon}${formattedMinutes} ${ampm}`;

            clockElement.textContent = timeString; //시계 요소에 시간 표시
        };

        // 페이지 로드 시 시계 초기 표시
        updateClock();

        // 1초마다 시계 업데이트
        setInterval(updateClock, 1000);

        // console.log('시계 작동'); // 디버그
    }
}