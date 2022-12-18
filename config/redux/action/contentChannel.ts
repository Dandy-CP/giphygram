import axios from 'axios';
import { Search } from '../../../config/GhipyAPI/endpointGifApi';
import { apiKey } from '../../../config/GhipyAPI/apiKey';

import { setContentChannel } from '../reducer/setContentChannel';

const setContentChannelAction = (
  profile: string | string[] | undefined,
  offset?: number,
) => {
  return (dispatch: any) => {
    try {
      const fetchContentProfile = async () => {
        const getContent = await axios(Search, {
          params: {
            api_key: apiKey,
            q: '@' + `${profile}`,
            limit: 15,
            offset: offset,
          },
        });
        const contentResult = getContent.data.data;
        dispatch(setContentChannel(getContent.data.data));

        if (contentResult.length === 0) {
          axios
            .get(Search, {
              params: {
                api_key: apiKey,
                q: `${profile}`,
                limit: 15,
                offset: offset,
              },
            })
            .then((res: any) => {
              dispatch(setContentChannel(res.data.data));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
      fetchContentProfile();
    } catch (error: any) {
      console.log(error);
    }
  };
};

export default setContentChannelAction;
