import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  contentByID: any[];
  errorHandling: number;
}

const initialState: DataState = {
  contentByID: [],
  errorHandling: 200,
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
    setErrorHandling: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.errorHandling>,
    ) => {
      state.errorHandling = action.payload;
    },
  },
});

export const getDataContentByIdState = (state: { contentByID: DataState }) =>
  state.contentByID;

export const { setGetContentByID, setErrorHandling } = getContentByID.actions;
export default getContentByID.reducer;
