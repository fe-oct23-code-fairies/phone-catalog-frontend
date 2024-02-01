import { User } from '../types/User';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

function get<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url).then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return response.json();
  });
}

function post<T>(url: string, data: string): Promise<T> {
  return fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  }).then(async response => {
    if (!response.ok) {
      const message = await response.json();

      throw new Error(message.error);
    }

    return response.json();
  });
}

export const client = {
  getProducts: <T>() => get<T>('/products'),
  getProductById: <T>(id: string) => get<T>(`/products/${id}`),

  getNew: <T>() => get<T>('/products/new'),
  getHot: <T>() => get<T>('/products/discount'),

  getAccessories: <T>() => get<T>('/accessories'),
  getAccessoryById: <T>(id: string) => get<T>(`/accessories/${id}`),
  getAccessoriesByQuery: <T>(page: string, limit: string, sortBy: string) => get<T>(`/accessories?sortBy=${sortBy}&limit=${limit}&page=${page}`),

  getPhones: <T>() => get<T>('/phones'),
  getPhoneById: <T>(id: string) => get<T>(`/phones/${id}`),
  getPhonesByQuery: <T>(page: string, limit: string, sortBy: string) => get<T>(`/phones?sortBy=${sortBy}&limit=${limit}&page=${page}`),

  getTablets: <T>() => get<T>('/tablets'),
  getTabletById: <T>(id: string) => get<T>(`/tablets/${id}`),
  getTabletsByQuery: <T>(page: string, limit: string, sortBy: string) => get<T>(`/tablets?sortBy=${sortBy}&limit=${limit}&page=${page}`),

  getDetailed: <T>() => get<T>('/products-detailed'),
  getDetailedById: <T>(id: string) => get<T>(`/products-detailed/${id}`),
  getDetailedRecommendations: <T>(id: string) => get<T>(`/products-detailed/${id}/recommended`),

  login: <T>(credentials: Omit<User, 'id'>) => post<T>(
    '/auth/signin',
    JSON.stringify(credentials),
  ),
  register: <T>(credentials: Omit<User, 'id'>) => post<T>(
    '/auth/signup',
    JSON.stringify(credentials),
  ),
};
