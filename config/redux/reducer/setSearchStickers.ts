import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  dataSearchStickers: any[];
}

const initialState: DataState = {
  dataSearchStickers: [],
};

const searchStickers = createSlice({
  name: 'ENDPOINT_SEARCH_STICKERS',
  initialState,
  reducers: {
    setSearchStickers: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataSearchStickers>,
    ) => {
      state.dataSearchStickers = [
        ...state.dataSearchStickers,
        ...action.payload,
      ];
    },
    setResetStickersSearch: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataSearchStickers>,
    ) => {
      state.dataSearchStickers = action.payload;
    },
  },
});

export const getDataSearchStickers = (state: { StickersSearch: DataState }) =>
  state.StickersSearch;
export const { setSearchStickers, setResetStickersSearch } =
  searchStickers.actions;
export default searchStickers.reducer;
