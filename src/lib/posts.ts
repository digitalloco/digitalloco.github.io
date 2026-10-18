import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// Published posts, newest first. Drafts appear under `astro dev`
// only, never in a build.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection(
    'blog',
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// The one place a post's URL is made: /blog/YYYY/<folder>/
export function postUrl(post: Post): string {
  return `/blog/${post.data.date.getUTCFullYear()}/${post.id}/`;
}

// A post's social preview image, generated at build time.
export function postOgImage(post: Post): string {
  return `/og/blog/${post.id}.png`;
}

export function tagUrl(tag: string): string {
  return `/tags/${tag.toLowerCase().replaceAll(' ', '-')}/`;
}

// Posts grouped by year, newest year first, for the archive page.
export function groupByYear(posts: Post[]): Array<[number, Post[]]> {
  const years = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.data.date.getUTCFullYear();
    const list = years.get(year) ?? [];
    list.push(post);
    years.set(year, list);
  }
  return [...years.entries()].sort((a, b) => b[0] - a[0]);
}
