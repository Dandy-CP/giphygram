import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  dataVerifiedChannel: any[];
  dataUnverifiedChannel: any;
  isFetching: boolean;
}

const initialState: DataState = {
  dataVerifiedChannel: [],
  dataUnverifiedChannel: {},
  isFetching: false,
};

const channelUser = createSlice({
  name: 'GET_CHANNEL',
  initialState,
  reducers: {
    setVerifiedChannel: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataVerifiedChannel>,
    ) => {
      state.dataVerifiedChannel = action.payload;
    },

    setUnverifiedChannel: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataUnverifiedChannel>,
    ) => {
      state.dataUnverifiedChannel = action.payload;
    },

    setChannelIsFetching: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.isFetching>,
    ) => {
      state.isFetching = action.payload;
    },
  },
});

export const getDataChannelState = (state: { Channel: DataState }) =>
  state.Channel;

export const {
  setVerifiedChannel,
  setUnverifiedChannel,
  setChannelIsFetching,
} = channelUser.actions;

export default channelUser.reducer;
