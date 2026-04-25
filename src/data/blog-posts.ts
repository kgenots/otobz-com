import { type Locale } from "@/lib/i18n";

export type PostSection = {
  headingKey: string;
  paragraphKeys: string[];
};

export type Post = {
  slug: string;
  titleKey: string;
  excerptKey: string;
  date: string;
  image?: string;
  tags?: string[];
  sections: PostSection[];
};

const legacyPosts: Post[] = [];

import { loadAutoPosts } from "./auto-posts";

const autoPosts = loadAutoPosts();

export const posts: Post[] = [...autoPosts, ...legacyPosts];
