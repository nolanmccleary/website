export type Writing = Entry[];

export interface Entry {
  title: string;
  links: EntryLinks;
}

interface EntryLinks {
  post: string;
}