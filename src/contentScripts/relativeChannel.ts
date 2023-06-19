import { addLemmyLink, getElements, getMainInstance } from './common';
import hosts from './hosts';

export default function decorate() {
  const mainInstance = getMainInstance();
  const hostname = window.location.hostname;
  if (hostname === mainInstance) return;
  if (!hosts.has(hostname)) {
    console.debug('Lemmink: The current hostname is not a known Lemmy/kbin instance');
    return;
  }
  for (const link of getElements(
    "//a[ not(@lemminked) and (starts-with(@href, '/c/') or starts-with(@href, '/m/')) ]",
  )) {
    const matches = link.pathname.match(/^\/[cm]\/([^/@]+)@?([^/@]*)$/);
    if (!matches) continue;
    const [_, channel, instance] = matches;
    if (instance === mainInstance) continue;
    addLemmyLink(link, channel, instance || hostname);
  }
}
