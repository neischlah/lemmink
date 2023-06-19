import { addLemmyLink, getElements, getMainInstance } from './common';

export default function decorate() {
  const mainInstance = getMainInstance();
  for (const link of getElements("//a[not(@lemminked) and starts-with(text(), '!')]")) {
    const target = getTarget(link.textContent || '');
    if (!target || target.instance === mainInstance) continue;
    addLemmyLink(link, target.channel, target.instance);
  }
}

function getTarget(text: string) {
  const matches = text.match(/^!([^@\s]+)@([\S]+)$/);
  if (!matches) return null;
  return {
    channel: matches[1],
    instance: matches[2],
  };
}
