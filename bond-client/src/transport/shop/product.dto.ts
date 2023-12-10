export type ProductDto = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  description: string;
};

export type GetProductsRequest = {
  search: string;
  categoryId: number | null;
  page: number;
  pageSize: number;
  min: number | null;
  max: number | null;
};

export type GetProductsResponse = {
  items: Array<ProductDto>;
  pageCount: number;
};

export type CriteriaDto = {
  categories: Array<{ id: number; name: string }>;
  topPicks: Array<{ id: number; name: string }>;
  max: number;
  min: number;
};
