import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  dataContentChannel: any[];
}

const initialState: DataState = {
  dataContentChannel: [],
};

const contentChannel = createSlice({
  name: 'GET_CONTENT_CHANNEL',
  initialState,
  reducers: {
    setContentChannel: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataContentChannel>,
    ) => {
      state.dataContentChannel = [
        ...state.dataContentChannel,
        ...action.payload,
      ];
    },
    setResetOnPageChange: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataContentChannel>,
    ) => {
      state.dataContentChannel = action.payload;
    },
  },
});

export const getDataContentChannelState = (state: {
  ContentChannel: DataState;
}) => state.ContentChannel;

export const { setContentChannel, setResetOnPageChange } =
  contentChannel.actions;
export default contentChannel.reducer;
