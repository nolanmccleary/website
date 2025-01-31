export type Writing = Entry[];

export interface Entry {
  title: string;
  links: EntryLinks;
}

interface EntryLinks {
  github?: string;
  post?: string;
}