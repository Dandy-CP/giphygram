import Image from 'next/image';

import { UserAuth } from '../../../config/context/AuthContext';

import {
  ContainerUsername,
  NameAndUsername,
  UsernameData,
} from '../../../styles/Homepage/User/username.styled';

import DefaultAva from '../../../public/userAva.gif';

const Username = () => {
  const { user } = UserAuth();

  return (
    <ContainerUsername>
      <UsernameData>
        {user.photoURL === null || user.isAnonymous === true ? (
          <Image src={DefaultAva} alt="DefaultAva" width={50} height={50} />
        ) : (
          <Image src={user.photoURL} alt="UserAva" width={50} height={50} />
        )}

        <NameAndUsername>
          {user.displayName === null ? (
            <h3>Unknow User</h3>
          ) : (
            <h3>{user.displayName}</h3>
          )}

          <p>user-12345</p>
        </NameAndUsername>
      </UsernameData>
    </ContainerUsername>
  );
};

export default Username;
