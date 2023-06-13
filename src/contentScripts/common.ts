import { mainServerStorage } from '~/logic';

export const getMainInstance = () => mainServerStorage.value;
export const setMainInstance = (instance: string) =>
  (mainServerStorage.value = instance);

export function getElements(xpath: string): HTMLAnchorElement[] {
  const result = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.ANY_TYPE,
    null,
  );

  const elements: HTMLAnchorElement[] = [];
  let e;
  while ((e = result.iterateNext())) elements.push(e as HTMLAnchorElement);
  return elements;
}

// *getElements(xpath: string): Generator<Node> {
//   const result = document.evaluate(
//     xpath,
//     document,
//     null,
//     XPathResult.ANY_TYPE,
//     null,
//   );

//   let e;
//   while ((e = result.iterateNext())) yield e;
// },

export function getLinkElement(href: string) {
  const a = document.createElement('a');
  a.href = href;
  a.appendChild(document.createTextNode(' 🔗 '));
  return a;
}

export function addElementAfter(element: Node, newElement: Node) {
  element.parentNode?.insertBefore(newElement, element.nextSibling);
}
