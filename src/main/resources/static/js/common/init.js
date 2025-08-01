import { startLenisLoop } from '../core/lenis.js';
import { cacheCommonElements } from '../core/cacheElements.js';
import { initializeHeaderToggle } from '../common/header.js';
import { initializeClock } from '../common/footer.js';
import { initializeApplyModal } from '../common/apply.js';

cacheCommonElements();
startLenisLoop();
initializeHeaderToggle();
initializeClock();
initializeApplyModal();