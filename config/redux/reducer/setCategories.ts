import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  dataCategories: any[];
  isFetching: boolean;
}

const initialState: DataState = {
  dataCategories: [],
  isFetching: false,
};

const categories = createSlice({
  name: 'GET_CATEGORIES',
  initialState,
  reducers: {
    setCategories: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataCategories>,
    ) => {
      state.dataCategories = action.payload;
    },
    setIsFetching: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.isFetching>,
    ) => {
      state.isFetching = action.payload;
    },
  },
});

export const getDataCategories = (state: { CategoriesContent: DataState }) =>
  state.CategoriesContent;
export const { setCategories, setIsFetching } = categories.actions;
export default categories.reducer;
