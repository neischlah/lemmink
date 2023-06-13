import {
  addElementAfter,
  getElements,
  getLinkElement,
  getMainInstance,
} from './common';
import lemmyHosts from './lemmyHosts';

export default function decorate() {
  const mainInstance = getMainInstance();
  const hostname = window.location.hostname;
  if (hostname === mainInstance) return;
  if (!lemmyHosts.has(hostname)) {
    console.debug(
      'Lemmink: The current hostname is not a known Lemmy instance',
    );
    return;
  }
  for (const link of getElements("//a[starts-with(@href, '/c/')]")) {
    const matches = link.pathname.match(/^\/c\/([^/]*)@?([^/]*)/);
    if (!matches || !matches[1]) continue;
    const href = `https://${mainInstance}/c/${matches[1]}@${
      matches[2] || hostname
    }`;
    link.setAttribute('lemminked', '');
    addElementAfter(link, getLinkElement(href));
  }
}
