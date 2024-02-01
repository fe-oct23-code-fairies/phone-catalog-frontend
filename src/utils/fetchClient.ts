export const BASE_URL = process.env.REACT_APP_BASE_URL;

function get<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url).then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
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
  getAccessoriesByQuery: <T>(
    page: string,
    limit: string,
    sortBy: string,
    sortOrder: string,
  ) => get<T>(`/accessories?sortBy=${sortBy}&limit=${limit}&page=${page}&sortOrder=${sortOrder}`),

  getPhones: <T>() => get<T>('/phones'),
  getPhoneById: <T>(id: string) => get<T>(`/phones/${id}`),
  getPhonesByQuery: <T>(
    page: string,
    limit: string,
    sortBy: string,
    sortOrder: string,
  ) => get<T>(`/phones?sortBy=${sortBy}&limit=${limit}&page=${page}&sortOrder=${sortOrder}`),

  getTablets: <T>() => get<T>('/tablets'),
  getTabletById: <T>(id: string) => get<T>(`/tablets/${id}`),
  getTabletsByQuery: <T>(
    page: string,
    limit: string,
    sortBy: string,
    sortOrder: string,
  ) => get<T>(`/tablets?sortBy=${sortBy}&limit=${limit}&page=${page}&sortOrder=${sortOrder}`),

  getDetailed: <T>() => get<T>('/products-detailed'),
  getDetailedById: <T>(id: string) => get<T>(`/products-detailed/${id}`),
  getDetailedRecommendations: <T>(id: string) => get<T>(`/products-detailed/${id}/recommended`),
};
