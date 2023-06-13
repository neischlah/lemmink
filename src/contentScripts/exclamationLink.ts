import {
  addElementAfter,
  getElements,
  getLinkElement,
  getMainInstance,
} from './common';

export default function decorate() {
  const mainInstance = getMainInstance();
  for (const link of getElements("//a[starts-with(text(), '!')]")) {
    const target = getTarget(link.textContent || '');
    if (!target || target.instance === mainInstance) continue;
    const href = `https://${mainInstance}/c/${target.channel}@${target.instance}`;
    addElementAfter(link, getLinkElement(href));
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
