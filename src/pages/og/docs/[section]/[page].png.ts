// /og/docs/<section>/<page>.png: one preview image per documentation page.
import type { APIRoute, GetStaticPaths } from 'astro';
import { pngResponse, renderOgImage } from '../../../../lib/og';
import { docPageId, docSectionId, getDocs, type Doc } from '../../../../lib/docs';

export const getStaticPaths = (async () => {
  const docs = await getDocs();
  return docs.map((doc) => ({
    params: { section: docSectionId(doc), page: docPageId(doc) },
    props: { doc },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { doc } = props as { doc: Doc };
  return pngResponse(await renderOgImage(doc.data.title, doc.data.description));
};
