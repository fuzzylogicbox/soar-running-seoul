import { applyModalElement, applyBtns } from '../core/cacheElements.js';

export function initializeApplyModal () {
    const closeBtn = applyModalElement.querySelector('.closeModalBtn');
    const eventDateDisplay = applyModalElement.querySelector('#event_date_display');
    const eventDateValue = applyModalElement.querySelector('#event_date_value');

    if(eventDateDisplay && eventDateValue) {

        // --- 행사 날짜 계산 및 업데이트 함수
        const calculateAndSetEventDate = () => {

            // 현재 날짜
            const today = new Date();
            today.setHours(0, 0, 0, 0); // 시간 초기화

            // 현재 요일 가져오기 (0:일 ~ 6:토)
            const currentDayOfWeek = today.getDay();

            // --- 접수 기간 시작 요일 및 행사 요일 ---
            // 이 값을 변경하여 접수 기간 시작 요일과 행사 요일을 설정
            const registrationStartDayOfWeek = 1; // 월요일
            const eventDayOfWeek = 3; // 수요일

            // 현재 날짜가 속한 접수 기간의 시작 날짜(이번 주 월요일) 찾기기
            // 오늘이 접수 시작 요일 이후 몇 일 지났는지 계산 (Date.getDay() 기준)
            const daysSinceRegStart = (currentDayOfWeek - registrationStartDayOfWeek + 7) % 7; // 일요일이 있으니 +7로 양수 만들고, 나머지 연산으로 0~6 값으로 만들기기

            const registrationStartDateOfCurrentWeek = new Date(today); // 오늘 날짜 복사
            registrationStartDateOfCurrentWeek.setDate(today.getDate() - daysSinceRegStart); // 오늘에서 지나온 일수 빼기 -> 이번 주 접수 시작 요일 날짜

            // 이번 주 접수 시작 날짜를 기준으로 행사일 (그 다음 주 행사 요일)을 계산합니다.
            const daysFromRegStartToEventDay = (eventDayOfWeek - registrationStartDayOfWeek + 7) % 7;

            // 이번 주 접수 시작 날짜에 "접수 시작 요일 -> 행사 요일까지의 차이" + "7일 (다음 주로 이동)" 더하기
            const eventDate = new Date(registrationStartDateOfCurrentWeek); // 이번 주 접수 시작 날짜 복사
            // registrationStartDateOfCurrentWeek.getDate() + (접수 시작 요일 -> 행사 요일 간격) + 7일
            eventDate.setDate(registrationStartDateOfCurrentWeek.getDate() + daysFromRegStartToEventDay + 7);

            // 날짜를 문자열로 반환
            const formatDate = (date) => {
                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                return `${year}-${month}-${day}`;
            };

            // 계산된 행사 날짜 문자열
            const eventDateString = formatDate(eventDate);

            // 보이는 텍스트 요소 업데이트
            eventDateDisplay.textContent = eventDateString;

            // 숨겨진 input 요소의 value 업데이트
            eventDateValue.value = eventDateString;
        }

        // 모달 초기화 시 행사 날짜 계산 업데이트 함수 실행
        calculateAndSetEventDate();
        //--------------------------------------------

    } else {
        console.warn('행사날 관련 요소 중 하나 이상 찾을 수 없음.')
    }

    if (applyBtns && closeBtn) {

        // 모달 열기 함수
        const openModal = () =>{
            applyModalElement.classList.add('visible');
        };

        // 모달 닫기 함수
        const closeModal = () => {
            applyModalElement.classList.remove('visible');
        };

        // Apply 버튼 클릭시 모달 열기
        applyBtns.forEach(button => {
            button.addEventListener('click', openModal);
        });

        // 닫기 버튼 클릭시 모달 닫기
        closeBtn.addEventListener('click', closeModal);

        // 배경 클릭 시 모달 닫기
        applyModalElement.addEventListener('click', function(event){
            if(event.target === applyModalElement){
                closeModal();
            }
        });

        // esc 키 입력 시 모달 닫기
        document.addEventListener('keydown', function(event){
            if(event.key === 'Escape' || event.key === 'Esc'){
                if(applyModalElement.classList.contains('visible')){
                    closeModal();
                }
            }
        });
    } else {
        console.warn('모달토글 관련 요소 찾을 수 없음')
    }
}
