import axios from 'axios';

export const currencyAPI = axios.create({
  baseURL: 'https://v6.exchangerate-api.com/v6/',
});

export const getCurrencyData = async () => {
  const apiKey = '77c84f5ad5c041ff6bf89213';
  const currency = 'RON';
  const endpoint = `${apiKey}/latest/${currency}`;
  try {
    const { data } = await currencyAPI.get(endpoint);
    return data;
  } catch (error) {
    console.error('Error fetching currency data:', error);
    throw error;
  }
};
