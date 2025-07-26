import { startLenisLoop } from '../core/lenis.js';
import { cacheCommonElements } from '../core/cacheElements.js';
import { initializeHeaderToggle } from '../common/header.js';

cacheCommonElements();
startLenisLoop();
initializeHeaderToggle();