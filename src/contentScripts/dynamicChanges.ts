import { decorateAll } from './common';

export function watchDynamicChanges() {
  watch('.comments,.subject-list');
}

function watch(selector: string) {
  const element = document.body.querySelector(selector);
  if (!element) return;
  const observer = new MutationObserver(() => decorateAll());
  observer.observe(element, { childList: true });
}
