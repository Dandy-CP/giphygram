import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../config/firebase';

import {
  setProfile,
  setPosted,
  setFollowing,
  setSaved,
} from '../reducer/setUserProfile';

const setUserProfileAction = (userEmail: string) => {
  return (dispatch: any) => {
    try {
      const getUserProfile = () => {
        onSnapshot(doc(db, 'users', `${userEmail}`), (doc) => {
          dispatch(setProfile(doc.data()?.profile));
        });

        onSnapshot(doc(db, 'users', `${userEmail}`), (doc) => {
          dispatch(setPosted(doc.data()?.posted));
        });

        onSnapshot(doc(db, 'users', `${userEmail}`), (doc) => {
          dispatch(setFollowing(doc.data()?.following));
        });

        onSnapshot(doc(db, 'users', `${userEmail}`), (doc) => {
          dispatch(setSaved(doc.data()?.saved));
        });
      };
      getUserProfile();
    } catch (error) {
      console.log(error);
    }
  };
};

export default setUserProfileAction;
