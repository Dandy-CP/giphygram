import { setInfiniteScroll, setOnBottom } from '../reducer/setInfiniteScroll';

const setInfiniteScrollAction = () => {
  return (dispatch: any) => {
    const handleScroll = (e: any) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;

      if (currentHeight + 1 >= scrollHeight) {
        window.removeEventListener('scroll', handleScroll);
        dispatch(setOnBottom(true));

        setTimeout(() => {
          dispatch(setInfiniteScroll(15));
          dispatch(setOnBottom(false));
        }, 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  };
};

export default setInfiniteScrollAction;
