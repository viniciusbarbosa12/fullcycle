export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
};

export type ProductQuery = {
  search: string;
  category: string | null;
  page: number;
  pageSize: number;
};

export type ProductPage = {
  items: Product[];
  page: number;
  pageSize: number;
  totalItems: number;
};

export type LoadState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

export type DetailState<T> =
  | { status: 'idle' }
  | LoadState<T>;
