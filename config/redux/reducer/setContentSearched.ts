import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  dataContentSearched: any[];
}

const initialState: DataState = {
  dataContentSearched: [],
};

const contentSearched = createSlice({
  name: 'ENDPOINT_SEARCH',
  initialState,
  reducers: {
    setContentSearched: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataContentSearched>,
    ) => {
      state.dataContentSearched = [
        ...state.dataContentSearched,
        ...action.payload,
      ];
    },
    setResetOnChange: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataContentSearched>,
    ) => {
      state.dataContentSearched = action.payload;
    },
  },
});

export const getDataContentSearched = (state: { ContentSearched: DataState }) =>
  state.ContentSearched;
export const { setContentSearched, setResetOnChange } = contentSearched.actions;
export default contentSearched.reducer;
