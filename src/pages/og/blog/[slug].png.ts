// /og/blog/<folder>.png: one preview image per post.
import type { APIRoute, GetStaticPaths } from 'astro';
import { pngResponse, renderOgImage } from '../../../lib/og';
import { getPosts, type Post } from '../../../lib/posts';

export const getStaticPaths = (async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: Post };
  return pngResponse(await renderOgImage(post.data.title, post.data.description));
};
