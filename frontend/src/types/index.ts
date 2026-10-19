export interface Item {
  id: number;
  title: str;
  description?: string;
}

export interface ItemCreate {
  title: string;
  description?: string;
}
