import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  contentByID: any[];
}

const initialState: DataState = {
  contentByID: [],
};

const getContentByID = createSlice({
  name: 'ENDPOINT_GET_CONTENT_BY_ID',
  initialState,
  reducers: {
    setGetContentByID: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.contentByID>,
    ) => {
      state.contentByID = action.payload;
    },
  },
});

export const getDataContentByIdState = (state: { contentByID: DataState }) =>
  state.contentByID;

export const { setGetContentByID } = getContentByID.actions;
export default getContentByID.reducer;
