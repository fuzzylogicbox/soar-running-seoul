window.addEventListener('load', function () {

// --- 헤더 토글
  const menuBtnElement = document.querySelector('.menuBtn');
  const navWrapperElement = document.querySelector('.navWrapper');

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