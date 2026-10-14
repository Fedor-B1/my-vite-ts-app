import apiClient from "./client";

export interface Dimensions {
  height: number,
  width: number,
  depth: number,
}

export interface ProductDetail {
  id: number,
  weight: number,
  dimensions: Dimensions,
}

// GET /product-detail — получение списка всех записей
export const getProductDetails = async () => {
  return apiClient.get<ProductDetail[]>("/product-detail");
};

// GET /product-detail/id — получение записи по id
export const getProductDetailById = async (id: number) => {
  return apiClient.get<ProductDetail>(`/product-detail/${id}`);
};