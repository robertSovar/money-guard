import { createSlice } from '@reduxjs/toolkit';
import {
  addTransactionThunk,
  allTransactionThunk,
  deleteTransactionThunk,
  getTransactionsCategoriesThunk, updatedTransactionThunk,
} from './operations';

const initialState = {
  categories: [],
  transactions: [],
};

const slice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        getTransactionsCategoriesThunk.fulfilled,
        (state, { payload }) => {
          state.categories = payload.map(category => {
            return { value: category.id, label: category.name };
          });
        }
      )
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactions.push(payload);
      })
      .addCase(allTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.filter(t => t.id !== payload);
      })
      .addCase(updatedTransactionThunk.fulfilled, (state, { payload }) => {
        const transactionIndex = state.transactions.findIndex(t => t.id === payload.id)
        state.transactions[transactionIndex] = payload
      });
  },
});

export const transactionsReducer = slice.reducer;
