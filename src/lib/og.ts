// Social preview images (1200 x 630 PNG), drawn at build time: satori
// lays the text out as SVG, resvg rasterises it. Nothing runs in the
// reader's browser.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { SITE_TITLE } from './site';

const WIDTH = 1200;
const HEIGHT = 630;

// Inter from the @fontsource/inter package. satori needs WOFF or TTF,
// not WOFF2. The build always runs from the project root.
function fontFile(weight: 400 | 700): Promise<Buffer> {
  return readFile(
    join(process.cwd(), 'node_modules/@fontsource/inter/files', `inter-latin-${weight}-normal.woff`),
  );
}

let fonts: Promise<[Buffer, Buffer]> | undefined;
function loadFonts(): Promise<[Buffer, Buffer]> {
  fonts ??= Promise.all([fontFile(400), fontFile(700)]);
  return fonts;
}

// satori takes a React-style element tree; written as plain objects so
// no JSX or React is needed.
type Node = { type: string; props: { style?: Record<string, unknown>; children?: unknown } };
const el = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

export async function renderOgImage(title: string, subtitle: string): Promise<Uint8Array> {
  const [regular, bold] = await loadFonts();
  const tree = el(
    'div',
    {
      // satori sizes content-box by default: without border-box the
      // padding and border push the bottom line off the image.
      width: WIDTH,
      height: HEIGHT,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 80,
      backgroundColor: '#ffffff',
      color: '#111111',
      fontFamily: 'Inter',
      borderBottom: '16px solid #444444',
    },
    [
      el('div', { fontSize: 32, fontWeight: 700, color: '#555555' }, SITE_TITLE),
      el('div', { display: 'flex', flexDirection: 'column', gap: 24 }, [
        el('div', { fontSize: 64, fontWeight: 700, lineHeight: 1.15 }, title),
        el('div', { fontSize: 32, lineHeight: 1.35, color: '#444444' }, subtitle),
      ]),
      el('div', { fontSize: 24, color: '#666666' }, 'digitalloco.com - a hobby project'),
    ],
  );

  const svg = await satori(tree as unknown as Parameters<typeof satori>[0], {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: 'Inter', data: regular, weight: 400, style: 'normal' },
      { name: 'Inter', data: bold, weight: 700, style: 'normal' },
    ],
  });
  return new Resvg(svg).render().asPng();
}

export function pngResponse(png: Uint8Array): Response {
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
