import type { ReactNode } from "react";

export type BlogEntry = {
  title: string;
  description: string;
  image?: string;
  getBlog: () => ReactNode;
};

const bloglist: BlogEntry[] = [];

export default bloglist;
