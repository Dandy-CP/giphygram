import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  dataSubCategories: any[];
  isFetching: boolean;
}

const initialState: DataState = {
  dataSubCategories: [],
  isFetching: false,
};

const subCategories = createSlice({
  name: 'GET_SUBCATEGORIES',
  initialState,
  reducers: {
    setSubCategories: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataSubCategories>,
    ) => {
      state.dataSubCategories = action.payload;
    },
  },
});

export const getDataSubCategories = (state: { SubCategories: DataState }) =>
  state.SubCategories;
export const { setSubCategories } = subCategories.actions;
export default subCategories.reducer;
