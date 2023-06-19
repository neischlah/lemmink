import exclamationLink from './exclamationLink';
import relativeChannel from './relativeChannel';
import { mainServerStorage } from '~/logic';

export const getMainInstance = () => mainServerStorage.value;
export const setMainInstance = (instance: string) => (mainServerStorage.value = instance);

export function getElements(xpath: string): HTMLAnchorElement[] {
  const result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const elements: HTMLAnchorElement[] = [];
  let e;
  while ((e = result.iterateNext())) elements.push(e as HTMLAnchorElement);
  return elements;
}

export function addLemmyLink(element: HTMLElement, channel: string, instance: string) {
  element.setAttribute('lemminked', '');
  const a = makeLinkElement(`https://${getMainInstance()}/c/${channel}@${instance}`);
  if (element.parentElement?.tagName === 'LI') element.appendChild(a); // To not completely break navbars
  else addElementAfter(element, a);
  // console.debug('Lemmink: Added link to', element);
}

export function makeLinkElement(href: string) {
  const a = document.createElement('a');
  a.href = href;
  a.style.display = 'inline';
  a.appendChild(document.createTextNode(' 🔗 '));
  return a;
}

export function addElementAfter(element: HTMLElement, newElement: HTMLElement) {
  element.parentNode?.insertBefore(newElement, element.nextSibling);
}

export function decorateAll() {
  relativeChannel();
  exclamationLink();
}
