window.addEventListener('load', function () {
  // --- 요소 캐싱 ---
  const menuBtnElement = document.querySelector('.menuBtn');
  const navWrapperElement = document.querySelector('.navWrapper');

  const headerElement = document.querySelector('header .headerWrapper');

  const heroElement = document.querySelector('#sectionHero');
  const heroFilterElement = heroElement?.querySelector('.heroFilter');

  const beltElement = document.querySelector('#sectionBelt');
  const tapeBeltElement = beltElement?.querySelector('.tapeBelt');

  // 초기 위치값 설정
  let heroTop = 0;
  let heroBottom = 0;
  let beltTop = 0;

  let lastScrollY = window.scrollY;

  // --- 스크롤 이벤트 ---
  window.addEventListener('scroll', function () {
    const currentScrollY = window.scrollY;
    const windowInnerHeight = window.innerHeight;

    const delta = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;

    // 1. 헤더 인터랙션
    if (headerElement) {
      const headerHeight = headerElement.offsetHeight;

      // 상단에서는 항상 표시
      if (currentScrollY < headerHeight) {
        headerElement.style.top = '0px';
        headerElement.classList.remove('hidden');
      } else {
        if (delta > 0) {
          // 아래로 스크롤: 숨김
          headerElement.style.top = `-${headerHeight}px`;
          headerElement.classList.add('hidden');
        } else {
          // 위로 스크롤: 표시
          headerElement.style.top = '0px';
          headerElement.classList.remove('hidden');
        }
      }

      // Hero 아래로 내려가면 배경색 추가
      if(heroElement){
        heroBottom = heroElement.getBoundingClientRect().bottom + currentScrollY;
      }

      if (currentScrollY >= heroBottom) {
        headerElement.style.backgroundColor = 'var(--base)';
        headerElement.style.borderBottom = '1px solid var(--black)';
      } else {
        headerElement.style.backgroundColor = 'transparent';
        headerElement.style.borderBottom = '1px solid transparent';
      }
    } else {
      console.warn("header 요소 찾을 수 없음.")
    }

    // 2. Hero 필터 효과
    if (heroElement && heroFilterElement) {
      heroTop = heroElement.getBoundingClientRect().top + currentScrollY;
      const scale = 1 + ((currentScrollY - heroTop) / windowInnerHeight) * 2.3;

      if (currentScrollY >= heroTop) {
        heroFilterElement.style.transform = `translateY(${currentScrollY - heroTop}px) scale(${scale})`;

        if (currentScrollY >= heroTop * 1.5) {
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

    // 3. Belt 애니메이션
    if (beltElement && tapeBeltElement) {
      beltTop = beltElement.getBoundingClientRect().top + currentScrollY;
      const startScroll = beltTop - windowInnerHeight;

      if (currentScrollY >= startScroll) {
        const offset = currentScrollY - startScroll;
        tapeBeltElement.style.transform = `translateX(-${offset}px)`;
      } else {
        tapeBeltElement.style.transform = 'translateX(0px)';
      }
    } else {
      console.warn("belt 요소 찾을 수 없음.");
    }
  });

  // --- 헤더 토글 ---
  if (menuBtnElement && navWrapperElement) {
    menuBtnElement.addEventListener('click', function () {
      const isNavOpen = navWrapperElement.style.visibility === 'visible';

      if (isNavOpen) {
        navWrapperElement.style.top = '-30px';
        navWrapperElement.style.opacity = '0';
        setTimeout(() => {
          navWrapperElement.style.visibility = 'hidden';
        }, 300);
        menuBtnElement.style.backgroundImage = "url('../images/btn_menu.png')";
      } else {
        navWrapperElement.style.visibility = 'visible';
        navWrapperElement.style.top = '0px';
        navWrapperElement.style.opacity = '1';
        menuBtnElement.style.backgroundImage = "url('../images/btn_close.png')";
      }

    });
  } else {
    console.warn("헤더 요소(menuBtn || navWrapper) 찾을 수 없음.");
  }
});