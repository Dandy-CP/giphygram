import { setCheckConnection } from '../reducer/setCheckConection';

const setCheckConectionAction = () => {
  return (dispatch: any) => {
    function changeStatus() {
      dispatch(setCheckConnection(navigator.onLine));
    }

    window.addEventListener('online', changeStatus);
    window.addEventListener('offline', changeStatus);

    return () => {
      window.removeEventListener('online', changeStatus);
      window.removeEventListener('offline', changeStatus);
    };
  };
};

export default setCheckConectionAction;
