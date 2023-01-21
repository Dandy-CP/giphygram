import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  dataStickersContent: any[];
}

const initialState: DataState = {
  dataStickersContent: [],
};

const stickersContentChannel = createSlice({
  name: 'GET_CONTENT_STICKERS',
  initialState,
  reducers: {
    setContentStickers: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataStickersContent>,
    ) => {
      state.dataStickersContent = [
        ...state.dataStickersContent,
        ...action.payload,
      ];
    },
    setResetStickers: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataStickersContent>,
    ) => {
      state.dataStickersContent = action.payload;
    },
  },
});

export const getDataStickersContentState = (state: {
  ContentStickers: DataState;
}) => state.ContentStickers;
export const { setContentStickers, setResetStickers } =
  stickersContentChannel.actions;
export default stickersContentChannel.reducer;
