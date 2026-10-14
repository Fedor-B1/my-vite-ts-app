import apiClient from './client';

/** Запись ресурса /files (fake-rest.refine.dev) */
export interface FileRecord {
  id: number;
  name: string;
  url: string;
  type: string;
  size: number;
  status: string;
  percent: number;
  uid: string;
}

// GET /files — список файлов
export const getFiles = async () => {
  return apiClient.get<FileRecord[]>('/files');
};

// GET /files/:id — файл по id
export const getFileById = async (id: number) => {
  return apiClient.get<FileRecord>(`/files/${id}`);
};
