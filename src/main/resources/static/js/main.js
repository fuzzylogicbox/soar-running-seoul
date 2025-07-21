window.addEventListener('load', function () {
  // --- 요소 캐싱 ---
  const menuBtnElement = document.querySelector('.menuBtn');
  const navWrapperElement = document.querySelector('.navWrapper');

  const headerElement = document.querySelector('header');

  const heroElement = document.querySelector('#sectionHero');
  const heroFilterElement = heroElement?.querySelector('.heroFilter');

  const beltElement = document.querySelector('#sectionBelt');
  const tapeBeltElement = beltElement?.querySelector('.tapeBelt');

  // 초기 위치값 설정
  let heroTop = 0;
  let beltTop = 0;

  // --- 스크롤 이벤트 ---
  window.addEventListener('scroll', function () {
    const currentScrollY = window.scrollY;
    const windowInnerHeight = window.innerHeight;

    // Hero 필터 효과
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

      console.log("메뉴 토글 : ", isNavOpen ? "닫힘" : "열림");
    });
  } else {
    console.warn("헤더 요소(menuBtn || navWrapper) 찾을 수 없음.");
  }
})