import apiClient from './client';

export interface Event {
  id: number;
  title: string;
  date: string;
  type: 'success' | 'warning' | 'error';
}

export const getEvents = async () => {
  return apiClient.get<Event[]>('/events');
};

export const getEventById = async (id: number) => {
  return apiClient.get<Event>(`/events/${id}`);
};
