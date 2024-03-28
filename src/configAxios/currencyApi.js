import axios from 'axios';

export const currencyApi = axios.create({
  baseURL: 'https://api.monobank.ua',
});

export const getCurrencyData = async () => {
  const { data } = await currencyApi.get('/bank/currency');
  return data;
};
