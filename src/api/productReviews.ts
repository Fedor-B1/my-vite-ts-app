import apiClient from "./client";

export interface ReviewUser {
  id: number;
}

export interface ReviewProduct {
  id: number;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  user: ReviewUser;
  product: ReviewProduct;
}

export const getReviews = async () => {
  return apiClient.get<Review[]>('/reviews');
};

export const getReviewById = async (id: number) => {
  return apiClient.get<Review>(`/reviews/${id}`);
};

export const getProductReviews = async (productId: number) => {
  return apiClient.get<Review[]>(`/products/${productId}/reviews`);
};
