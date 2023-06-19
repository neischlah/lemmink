import { decorateAll } from './common';
import { watchDynamicChanges } from './dynamicChanges';

(() => {
  const init = async () => {
    decorateAll();
    watchDynamicChanges();
  };
  document.readyState === 'complete' ? init() : addEventListener('load', init);
})();
