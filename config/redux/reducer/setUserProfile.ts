import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

type User = {
  avatar?: string | any;
  email?: string;
  emailStatus?: boolean;
  name?: string;
  username?: string;
};

export interface DataState {
  profile: User;
  posted: any[];
  following: any[];
  saved: any[];
  commented: any[];
  liked: any[];
}

const initialState: DataState = {
  profile: {},
  posted: [],
  following: [],
  saved: [],
  commented: [],
  liked: [],
};

const userProfile = createSlice({
  name: 'GET_USER_PROFILE',
  initialState,
  reducers: {
    setProfile: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.profile>,
    ) => {
      state.profile = action.payload;
    },

    setPosted: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.posted>,
    ) => {
      state.posted = action.payload;
    },

    setFollowing: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.following>,
    ) => {
      state.following = action.payload;
    },

    setSaved: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.saved>,
    ) => {
      state.saved = action.payload;
    },

    setCommented: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.commented>,
    ) => {
      state.commented = action.payload;
    },

    setLiked: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.liked>,
    ) => {
      state.liked = action.payload;
    },
  },
});

export const getDataUserProfile = (state: { UserProfile: DataState }) =>
  state.UserProfile;
export const {
  setProfile,
  setPosted,
  setFollowing,
  setSaved,
  setCommented,
  setLiked,
} = userProfile.actions;
export default userProfile.reducer;
