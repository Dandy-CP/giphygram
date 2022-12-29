import axios from 'axios';
import { GetGIFsbyIDEndpoint } from '../../GhipyAPI/endpointGifApi';
import { apiKey } from '../../GhipyAPI/apiKey';
import {
  setGetContentByID,
  setErrorHandling,
} from '../reducer/setGetContentByID';

const setGetContentByIdAction = (ID: any, onClose: boolean) => {
  return (dispatch: any) => {
    try {
      const fetchContentByID = async () => {
        const res = await axios(GetGIFsbyIDEndpoint, {
          params: {
            api_key: apiKey,
            ids: ID,
          },
        }).catch((error) => {
          if (error.response.status === 400 || 404) {
            dispatch(setErrorHandling(error.response.status));
          }
          throw error;
        });

        if (onClose === true) {
          dispatch(setGetContentByID([]));
        } else {
          dispatch(setGetContentByID(res.data.data));
        }
      };
      fetchContentByID();
    } catch (error: any) {
      console.log(error);
    }
  };
};

export default setGetContentByIdAction;
