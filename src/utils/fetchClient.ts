const BASE_URL = process.env.REACT_APP_BASE_URL;

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
  getProducts: () => get('products'),
  getProductById: (id: string) => get(`products/${id}`),

  getAccessories: () => get('accessories'),
  getAccessoryById: (id: string) => get(`accessories/${id}`),

  getPhones: () => get('phones'),
  getPhoneById: (id: string) => get(`phones/${id}`),

  getTablets: () => get('tablets'),
  getTabletById: (id: string) => get(`tablets/${id}`),
};
