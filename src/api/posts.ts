// src/api/posts.ts
import apiClient from './client';

export interface PostImage {
  url: string;
  name: string;
  status: string;
  type: string;
  uid: string;
}

export interface PostCategory {
  id: number;
}

export interface PostUser {
  id: number;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  hit: number;
  category: PostCategory;
  user: PostUser;
  status: string;
  status_color: string;
  createdAt: string;
  publishedAt: string;
  image: PostImage[];
  tags: number[];
  language: number;
}

// GET /posts — получение списка всех постов
export const getPosts = async () => {
  return apiClient.get<Post[]>('/posts');
};

// GET /posts/:id — получение одного поста по id
export const getPostById = async (id: number) => {
  return apiClient.get<Post>(`/posts/${id}`);
};
