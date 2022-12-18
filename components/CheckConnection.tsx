import React, { useEffect } from 'react';

import { useDispatch, useSelector } from '../config/redux/store';
import setCheckConectionAction from '../config/redux/action/checkConnection';
import { getDataConnectionStatus } from '../config/redux/reducer/setCheckConection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

import { ConnectionBox, OfflineStatus } from '../styles/checkConnection.styled';

const CheckConnection = () => {
  const dispatch = useDispatch();
  const { connection } = useSelector(getDataConnectionStatus);

  useEffect(() => {
    dispatch(setCheckConectionAction());
  }, [dispatch]);

  return (
    <ConnectionBox>
      {!connection && (
        <OfflineStatus>
          <FontAwesomeIcon icon={faWifi} size="xl" />
          <p>
            You&apos;re offline <br /> Please check your internet connection
          </p>
        </OfflineStatus>
      )}
    </ConnectionBox>
  );
};

export default CheckConnection;
