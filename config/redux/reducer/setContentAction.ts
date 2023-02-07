import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  inputComment: string;
  commentedBy: any[];
  likedBy: any[];
  savedBy: any[];
}

const initialState: DataState = {
  inputComment: '',
  commentedBy: [],
  likedBy: [],
  savedBy: [],
};

const contentAction = createSlice({
  name: 'CONTENT_ACTION',
  initialState,
  reducers: {
    setInputComment: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.inputComment>,
    ) => {
      state.inputComment = action.payload;
    },

    setCommentedContent: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.commentedBy>,
    ) => {
      state.commentedBy = action.payload;
    },

    setLikedContent: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.likedBy>,
    ) => {
      state.likedBy = action.payload;
    },

    setSavedContent: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.savedBy>,
    ) => {
      state.savedBy = action.payload;
    },
  },
});

export const getDataContentAction = (state: { ContentAction: DataState }) =>
  state.ContentAction;
export const {
  setInputComment,
  setCommentedContent,
  setLikedContent,
  setSavedContent,
} = contentAction.actions;
export default contentAction.reducer;
