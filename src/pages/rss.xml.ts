// RSS 2.0 feed of published posts at /rss.xml, written by hand
// rather than adding the @astrojs/rss package for 30 lines.
import type { APIRoute } from 'astro';
import { getPosts, postUrl } from '../lib/posts';
import { SITE_DESCRIPTION, SITE_TITLE } from '../lib/site';

const escapeXml = (s: string) =>
  s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://digitalloco.com');
  const items = (await getPosts())
    .map((post) => {
      const link = new URL(postUrl(post), base).href;
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <description>${escapeXml(post.data.description)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${base.href}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-gb</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
