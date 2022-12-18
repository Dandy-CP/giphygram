import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  offset: number;
  onBottom: boolean;
}

const initialState: DataState = {
  offset: 0,
  onBottom: false,
};

const InfiniteScroll = createSlice({
  name: 'INFINITE_SCROLL',
  initialState,
  reducers: {
    setInfiniteScroll: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.offset>,
    ) => {
      state.offset = state.offset + action.payload;
    },
    setOnBottom: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.onBottom>,
    ) => {
      state.onBottom = action.payload;
    },
  },
});

export const getDataOffsetState = (state: { Offset: DataState }) =>
  state.Offset;

export const { setInfiniteScroll, setOnBottom } = InfiniteScroll.actions;
export default InfiniteScroll.reducer;
