import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  connection: boolean;
}

const initialState: DataState = {
  connection: true,
};

const checkConnection = createSlice({
  name: 'CHECK_CONNECTION',
  initialState,
  reducers: {
    setCheckConnection: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.connection>,
    ) => {
      state.connection = action.payload;
    },
  },
});

export const getDataConnectionStatus = (state: {
  ConnectionStatus: DataState;
}) => state.ConnectionStatus;

export const { setCheckConnection } = checkConnection.actions;
export default checkConnection.reducer;
