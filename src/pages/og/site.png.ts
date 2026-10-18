// /og/site.png: the preview image for every page that is not a post.
import type { APIRoute } from 'astro';
import { pngResponse, renderOgImage } from '../../lib/og';
import { SITE_DESCRIPTION, SITE_TITLE } from '../../lib/site';

export const GET: APIRoute = async () =>
  pngResponse(await renderOgImage(SITE_TITLE, SITE_DESCRIPTION));
