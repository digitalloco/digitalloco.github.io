import { getCollection, type CollectionEntry } from 'astro:content';

export type Doc = CollectionEntry<'docs'>;
export type DocSection = CollectionEntry<'docSections'>;

// Published documentation pages. Drafts appear under `astro dev` only.
export async function getDocs(): Promise<Doc[]> {
  return getCollection('docs', ({ data }) => import.meta.env.DEV || !data.draft);
}

export async function getSections(): Promise<DocSection[]> {
  const sections = await getCollection('docSections');
  return sections.sort((a, b) => a.data.order - b.data.order);
}

// A page's section is the first part of its id ("railcom/standards").
export function docSectionId(doc: Doc): string {
  return doc.id.split('/')[0];
}

export function docPageId(doc: Doc): string {
  return doc.id.split('/')[1];
}

// The pages of one section, in their `order`.
export function docsIn(docs: Doc[], sectionId: string): Doc[] {
  return docs
    .filter((d) => docSectionId(d) === sectionId)
    .sort((a, b) => a.data.order - b.data.order);
}

// The one place documentation URLs are made.
export function docUrl(doc: Doc): string {
  return `/docs/${doc.id}/`;
}

export function sectionUrl(sectionId: string): string {
  return `/docs/${sectionId}/`;
}

export function docOgImage(doc: Doc): string {
  return `/og/docs/${doc.id}.png`;
}
