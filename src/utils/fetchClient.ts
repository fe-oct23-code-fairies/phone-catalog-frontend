export const BASE_URL = process.env.REACT_APP_BASE_URL;

function get<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    });
}

export const client = {
  getProducts: <T>() => get<T>('/products'),
  getProductById: <T>(id: string) => get<T>(`/products-detailed/${id}`),

  getAccessories: <T>() => get<T>('/accessories'),
  getAccessoryById: <T>(id: string) => get<T>(`/products-detailed/${id}`),

  getPhones: <T>() => get<T>('/phones'),
  getPhoneById: <T>(id: string) => get<T>(`/products-detailed/${id}`),

  getTablets: <T>() => get<T>('/tablets'),
  getTabletById: <T>(id: string) => get<T>(`/products-detailed/${id}`),
};
