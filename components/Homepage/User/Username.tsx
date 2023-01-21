import { useEffect } from 'react';
import Image from 'next/image';

import { UserAuth } from '../../../config/context/AuthContext';
import { useDispatch, useSelector } from '../../../config/redux/store';
import setUserProfileAction from '../../../config/redux/action/userProfile';
import { getDataUserProfile } from '../../../config/redux/reducer/setUserProfile';

import {
  ContainerUsername,
  NameAndUsername,
  UsernameData,
} from '../../../styles/Homepage/User/username.styled';

import DefaultAva from '../../../public/userAva.gif';
import Link from 'next/link';

const Username = () => {
  const { user } = UserAuth();

  const dispatch = useDispatch();
  const { profile } = useSelector(getDataUserProfile);

  useEffect(() => {
    if (!user?.email) {
      return;
    }

    dispatch(setUserProfileAction(user?.email));
  }, [dispatch, user?.email]);

  console.log(user);

  return (
    <ContainerUsername>
      <UsernameData>
        {profile.avatar === null || user.isAnonymous === true ? (
          <Image src={DefaultAva} alt="DefaultAva" width={50} height={50} />
        ) : (
          <Image src={user.photoURL} alt="UserAva" width={50} height={50} />
        )}

        <NameAndUsername>
          <Link href={'/MyProfile'}>
            {user.displayName === null ? (
              <h3>Unknow User</h3>
            ) : (
              <>
                <h3>{profile.name}</h3>
                <p>@{profile.username}</p>
              </>
            )}
          </Link>
        </NameAndUsername>
      </UsernameData>
    </ContainerUsername>
  );
};

export default Username;
