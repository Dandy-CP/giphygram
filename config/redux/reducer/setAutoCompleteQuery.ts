import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  dataAutoComplete: any[];
}

const initialState: DataState = {
  dataAutoComplete: [],
};

const autoCompleteQuery = createSlice({
  name: 'ENDPOINT_AUTOCOMPLETE',
  initialState,
  reducers: {
    setAutoComplete: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.dataAutoComplete>,
    ) => {
      state.dataAutoComplete = action.payload;
    },
  },
});

export const getDataAutoCompleteState = (state: { AutoComplete: DataState }) =>
  state.AutoComplete;
export const { setAutoComplete } = autoCompleteQuery.actions;
export default autoCompleteQuery.reducer;
