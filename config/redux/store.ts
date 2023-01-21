import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';

import trendingGIFs from './reducer/setTrendingGIFs';
import InfiniteScroll from './reducer/setInfiniteScroll';
import getContentByID from './reducer/setGetContentByID';
import channelUser from './reducer/setChannel';
import contentChannel from './reducer/setContentChannel';
import checkConnection from './reducer/setCheckConection';
import categories from './reducer/setCategories';
import subCategories from './reducer/setSubCategories';
import autoCompleteQuery from './reducer/setAutoCompleteQuery';
import contentSearched from './reducer/setContentSearched';
import stickersContentChannel from './reducer/setStickersContent';
import searchStickers from './reducer/setSearchStickers';
import userProfile from './reducer/setUserProfile';

export const store = configureStore({
  reducer: {
    ConnectionStatus: checkConnection,
    TrendingGIFs: trendingGIFs,
    contentByID: getContentByID,
    Offset: InfiniteScroll,
    Channel: channelUser,
    ContentChannel: contentChannel,
    ContentStickers: stickersContentChannel,
    CategoriesContent: categories,
    SubCategories: subCategories,
    AutoComplete: autoCompleteQuery,
    ContentSearched: contentSearched,
    StickersSearch: searchStickers,
    UserProfile: userProfile,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
): TSelected => useSelectorBase<RootState, TSelected>(selector);
