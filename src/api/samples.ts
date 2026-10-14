import apiClient from './client';

// вынесен отдельно, т.к тип category - { id: number }, а не просто число
export interface SampleCategory {
  id: number;
}

export interface Sample {
  id: number;
  title: string;
  content: string;
  category: SampleCategory;
  tags: number[];
  createdAt: string;
}

// GET /samples — получение всех сэмплов
export const getSamples = async () => {
  return apiClient.get<Sample[]>('/samples');
};

// GET /samples/:id — получение одного сэмпла по id
export const getSampleById = async (id: number) => {
  return apiClient.get<Sample>(`/samples/${id}`);
};
