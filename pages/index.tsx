import { useEffect, useState } from 'react';
import { UserAuth } from '../config/context/AuthContext';

import Login from '../components/Login/Login';
import BackgroundLogin from '../components/Login/BackgroundLogin';
import Homepage from '../components/Homepage/Homepage';
import PreLoader from '../components/PreLoader';

export default function Home() {
  const [LoginToggle, setLoginToggle] = useState(true);
  const [PreLoading, setPreLoading] = useState(true);
  const { user } = UserAuth();

  useEffect(() => {
    if (user?.accessToken) {
      setPreLoading(false);
    } else if (user === null) {
      setPreLoading(false);
    } else {
      setPreLoading(true);
    }
  }, [user]);

  return (
    <>
      {PreLoading && <PreLoader />}

      {user?.accessToken ? (
        <Homepage />
      ) : (
        <>
          <BackgroundLogin />
          <Login
            toggle={LoginToggle}
            signup={() => setLoginToggle(false)}
            login={() => setLoginToggle(true)}
          />
        </>
      )}
    </>
  );
}
