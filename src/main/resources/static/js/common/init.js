import { startLenisLoop } from '../core/lenis.js';
import { cacheCommonElements } from '../core/cacheElements.js';
import { initializeHeaderToggle } from '../common/header.js';
import { initializeClock } from '../common/footer.js';

cacheCommonElements();
startLenisLoop();
initializeHeaderToggle();
initializeClock();