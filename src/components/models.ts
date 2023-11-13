export interface Tab {
  id: number;
  tab: string;
  caption: string;
  link: string;
  icon: string;
}

export interface Member {
  id: number;
  name: string;
  info: string;
  image: string;
}

export interface Notation {
  date: Date;
  title: string;
  note: string;
  docPath: string;
}
