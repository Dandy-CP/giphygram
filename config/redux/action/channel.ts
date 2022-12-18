import axios from 'axios';
import { ChannelSearch, Search } from '../../../config/GhipyAPI/endpointGifApi';
import { apiKey } from '../../../config/GhipyAPI/apiKey';

import {
  setVerifiedChannel,
  setUnverifiedChannel,
  setChannelIsFetching,
} from '../reducer/setChannel';

const setChannelUser = (profile: string | string[] | undefined) => {
  return (dispatch: any) => {
    //Fetch only profile verified
    const fetchProfile = async () => {
      dispatch(setChannelIsFetching(true));

      const getVerified = await axios(ChannelSearch, {
        params: {
          api_key: apiKey,
          q: profile,
          limit: 1,
        },
      });
      dispatch(setVerifiedChannel(getVerified.data.data));
      dispatch(setChannelIsFetching(false));

      //Store VerifiedChannel value for check
      const CheckChannel = getVerified.data.data;

      // if Verified channel lenght is 0
      //then Fetch Unverified channel from Search endpoint
      //then limit 1 and get user data from first response GIF endpoint
      if (CheckChannel.length === 0) {
        dispatch(setChannelIsFetching(true));

        const getUnverified = await axios(Search, {
          params: {
            api_key: apiKey,
            q: `@${profile}`,
            limit: 1,
          },
        });

        // Copy result for get user data
        const resultUnverifiedChannel: any = { ...getUnverified.data.data };

        //To prevent error when both channel is empty
        if (resultUnverifiedChannel[0] === undefined) {
          return null;
        }

        const UnverifiedChannel = resultUnverifiedChannel[0].user;
        dispatch(setUnverifiedChannel(UnverifiedChannel));
        dispatch(setChannelIsFetching(false));
      }
    };
    fetchProfile();
  };
};

export default setChannelUser;
