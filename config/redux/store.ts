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

export const store = configureStore({
  reducer: {
    ConnectionStatus: checkConnection,
    TrendingGIFs: trendingGIFs,
    contentByID: getContentByID,
    Offset: InfiniteScroll,
    Channel: channelUser,
    ContentChannel: contentChannel,
    CategoriesContent: categories,
    SubCategories: subCategories,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
): TSelected => useSelectorBase<RootState, TSelected>(selector);
