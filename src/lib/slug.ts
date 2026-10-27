/** "What Drip is" → "what-drip-is" — used for section anchors and the side menu. */
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[“”"'’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Top-level <Section title="…"> titles in a case study file, in order (sub-sections with level={3} and MDX comments are skipped). */
export const sectionTitles = (body = '') =>
  [...body.replace(/\{\/\*[\s\S]*?\*\/\}/g, '').matchAll(/<Section\b([^>]*)>/g)]
    .map((m) => m[1])
    .filter((attrs) => !/level=\{?\s*3/.test(attrs) && !/\bwide\b/.test(attrs))
    .map((attrs) => {
      const t = attrs.match(/title=(?:"([^"]*)"|\{'([^']*)'\}|\{"([^"]*)"\})/);
      return t ? t[1] ?? t[2] ?? t[3] : null;
    })
    .filter((t): t is string => Boolean(t));
