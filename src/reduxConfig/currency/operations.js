import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrencyData } from '../../configAxios/currencyApi';

export const fetchCurrency = createAsyncThunk(
  'fetchCurrency',
  async (_, { rejectWithValue }) => {
    try {
      // Fetch currency data using the provided function
      const currencyData = await getCurrencyData();

      // Extract the conversion rates for USD and EUR from the fetched data
      const USD = currencyData['conversion_rates']['USD'];
      const EUR = currencyData['conversion_rates']['EUR'];

      // Return the extracted data
      return { USD, EUR };
    } catch (error) {
      // Handle errors
      return rejectWithValue(error.message);
    }
  }
);
