import axios from 'axios';
import { GetGIFsbyIDEndpoint } from '../../GhipyAPI/endpointGifApi';
import { apiKey } from '../../GhipyAPI/apiKey';
import { setGetContentByID } from '../reducer/setGetContentByID';

const setGetContentByIdAction = (ID: any, onClose: boolean) => {
  return (dispatch: any) => {
    const fetchContentByID = async () => {
      const res = await axios(GetGIFsbyIDEndpoint, {
        params: {
          api_key: apiKey,
          ids: ID,
        },
      });

      if (onClose === true) {
        dispatch(setGetContentByID([]));
      } else {
        dispatch(setGetContentByID(res.data.data));
      }
    };
    fetchContentByID();
  };
};

export default setGetContentByIdAction;
