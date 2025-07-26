import { headerElement, getHeaderBackgroundTrigger } from '../core/cacheElements.js';

export function handleHeaderScroll(currentScrollY, currentVelocity) {
    if (!headerElement) {
        console.warn('header 못찾음')
    };

    const headerHeight = headerElement.offsetHeight;

    // 1. 헤더 숨김/표시
    if(currentScrollY < headerHeight) {
        headerElement.style.top = '0px';
        headerElement.classList.remove('hidden');
    } else if (currentVelocity !== 0) {
        if(currentVelocity > 0) {
            headerElement.style.top =`${headerHeight}px`;
            headerElement.classList.add('hidden');
        } else {
            headerElement.style.top = '0px';
            headerElement.classList.remove('hidden');
        }
    }

    // 2. 헤더 배경색 전환
    if (currentScrollY >= getHeaderBackgroundTrigger()) {
        headerElement.style.backgroundColor = 'var(--base)';
        headerElement.style.borderBottom = '1px solid var(--black)';
    } else {
        headerElement.style.backgroundColor = 'transparent';
        headerElement.style.borderBottom = '1px solid transparent';
    }
}

export function initializeHeaderToggle() {
    const menuBtnElement = document.querySelector('.menuBtn');
    const navWrapperElement = document.querySelector('.navWrapper');

    if(menuBtnElement && navWrapperElement) {
        menuBtnElement.addEventListener('click', function () {
            //navWrapper 상태 확인
            const isNavOpen = navWrapperElement.style.visibility === 'visible';

            if(isNavOpen) {
                // nav 닫기, opacity 와 top 먼저 변경
                navWrapperElement.style.top = '-30px';
                navWrapperElement.style.opacity = '0';

                // top, opacity 트랜지션 후 hidden 변경.
                setTimeout(() => {
                    navWrapperElement.style.visibility = 'hidden';
                }, 300);

                //메뉴버튼 버거 아이콘으로 변경
                menuBtnElement.style.backgroundImage = "url('../images/btn_menu.png')"

            } else {
                //nav 열기
                // visible 변경 후 top,opacity 트랜지션 (nav 닫기의 역순)
                navWrapperElement.style.visibility ='visible';
                navWrapperElement.style.top ='0px';
                navWrapperElement.style.opacity = '1';

                // 메뉴버튼 x 아이콘으로 변경
                menuBtnElement.style.backgroundImage = "url('../images/btn_close.png')"
            }
        });
    } else {
        console.warn("네비게이션 요소 찾을 수 없음.")
    }
};