// 공통 요소
export let headerElement = null;
export let clockElement = null;

export let beltElement = null;
export let tapeBeltElement = null;
export let beltTop_initial = 0;

export let applyModalElement = null;
export let applyBtns = null;

// Index 외 공용 (e.g. about.html 등)
export let bannerElement = null;
export let bannerTop_initial = 0;
export let bannerBottom_initial = 0;


// Index 페이지 전용
export let heroElement = null;
export let heroFilterElement = null;
export let heroTop_initial = 0;
export let heroBottom_initial = 0;

export let scratchAreaContainer = null;
export let scratchCanvasElement = null;
export let scratchFilterElement = null;
export let scratchCtx = null;



// About 페이지 전용
export let coachesWrapperElement = null;
export let coachImages = null;
export let coachesTop_initial = 0;
export let coachesBottom_initial = 0;

// 공통 스크롤 위치
export let lastScrollY = 0;

// --------------------- //
// 캐싱 함수 정의 부분   //
// --------------------- //

export function cacheCommonElements() {
    const header = document.querySelector('header .headerWrapper');
    if (header) {
        headerElement = header;
    }

    const clock = document.querySelector('#clock');
    if (clock) {
        clockElement = clock;
    }

    const applyBtnsAll = document.querySelectorAll('.applyBtn');
    if(applyBtnsAll.length > 0) {
        applyBtns = applyBtnsAll;
    }

    const apply = document.getElementById('applyModal');
    if (apply) {
        applyModalElement= apply;
    }

    const banner = document.querySelector('#sectionBanner');
    if (banner) {
        bannerElement = banner;
        const rect = banner.getBoundingClientRect();
        bannerTop_initial = rect.top + window.scrollY;
        bannerBottom_initial = rect.bottom + window.scrollY;
    }

    const belt = document.querySelector('#sectionBelt');
    if (belt) {
        beltElement = belt;
        beltTop_initial = belt.getBoundingClientRect().top + window.scrollY;

        const tapeBelt = belt.querySelector('.tapeBelt');
        if (tapeBelt) {
            tapeBeltElement = tapeBelt;
        }
    }
}

export function cacheIndexElements() {
    const hero = document.querySelector('#sectionHero');
    if (hero) {
        heroElement = hero;
        const rect = hero.getBoundingClientRect();
        heroTop_initial = rect.top + window.scrollY;
        heroBottom_initial = rect.bottom + window.scrollY;

        const filter = hero.querySelector('.heroFilter');
        if (filter) {
            heroFilterElement = filter;
        }
    }

    const scratchArea = document.querySelector('.scratchArea');
    if (scratchArea) {
        scratchAreaContainer = scratchArea;

        const canvas = scratchArea.querySelector('#drawingCanvas');
        const filter = scratchArea.querySelector('.scratchFilter');
        if (canvas) {
            scratchCanvasElement = canvas;
            scratchCtx = canvas.getContext('2d');
        }

        if (filter) {
            scratchFilterElement = filter;
        }
    }
}

export function cacheAboutElements() {
    const coaches = document.querySelector('.coachesWrapper');
    if (coaches) {
        coachesWrapperElement = coaches;
        const rect = coaches.getBoundingClientRect();
        coachesTop_initial = rect.top + window.scrollY;
        coachesBottom_initial = rect.bottom + window.scrollY;

        const images = coaches.querySelectorAll('.coachImg');
        if (images) {
            coachImages = images;
        }
    }
}

export function getHeaderBackgroundTrigger() {
    return heroBottom_initial ||  bannerBottom_initial || 0;
}