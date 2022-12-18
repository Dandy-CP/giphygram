import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  dataTrendingGIFs: any[];
  IsFetching: boolean;
}

const initialState: DataState = {
  dataTrendingGIFs: [],
  IsFetching: false,
};

const trendingGIFs = createSlice({
  name: 'ENDPOINT_TRENDING',
  initialState,
  reducers: {
    setTrendingGIFs: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataTrendingGIFs>,
    ) => {
      state.dataTrendingGIFs = [...state.dataTrendingGIFs, ...action.payload];
    },
    setIsFetching: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.IsFetching>,
    ) => {
      state.IsFetching = action.payload;
    },
  },
});

export const getDataTrendingState = (state: { TrendingGIFs: DataState }) =>
  state.TrendingGIFs;
export const { setTrendingGIFs, setIsFetching } = trendingGIFs.actions;
export default trendingGIFs.reducer;
