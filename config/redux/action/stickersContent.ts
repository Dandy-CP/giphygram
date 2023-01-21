import axios from 'axios';
import { Search } from '../../GhipyAPI/endpointStickerApi';
import { apiKey } from '../../GhipyAPI/apiKey';

import { setContentStickers } from '../reducer/setStickersContent';

const stickersContentAction = (
  profile: string | string[] | undefined,
  offset?: number,
) => {
  return (dispatch: any) => {
    try {
      const fetchStickers = async () => {
        const res = await axios(Search, {
          params: {
            api_key: apiKey,
            q: '@' + `${profile}`,
            limit: 15,
            offset: offset,
          },
        });
        const resultStickers = res.data.data;
        dispatch(setContentStickers(res.data.data));

        if (resultStickers.length === 0) {
          axios
            .get(Search, {
              params: {
                api_key: apiKey,
                q: `${profile}`,
                limit: 15,
                offset: offset,
              },
            })
            .then((response) => {
              dispatch(setContentStickers(response.data.data));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
      fetchStickers();
    } catch (error) {
      console.log(error);
    }
  };
};

export default stickersContentAction;
