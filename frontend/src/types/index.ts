export interface Item {
  id: number;
  title: string;
  description?: string;
}

export interface ItemCreate {
  title: string;
  description?: string;
}
