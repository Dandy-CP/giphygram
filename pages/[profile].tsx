import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from '../config/redux/store';
import setTrendingGIFsAction from '../config/redux/action/trendingGIFs';
import setChannelUser from '../config/redux/action/channel';
import setContentChannelAction from '../config/redux/action/contentChannel';
import setInfiniteScrollAction from '../config/redux/action/InfiniteScroll';
import stickersContentAction from '../config/redux/action/stickersContent';

import { getDataChannelState } from '../config/redux/reducer/setChannel';
import { getDataContentChannelState } from '../config/redux/reducer/setContentChannel';
import { getDataOffsetState } from '../config/redux/reducer/setInfiniteScroll';
import { setResetOnPageChange } from '../config/redux/reducer/setContentChannel';
import {
  getDataStickersContentState,
  setResetStickers,
} from '../config/redux/reducer/setStickersContent';
import {
  setVerifiedChannel,
  setUnverifiedChannel,
} from '../config/redux/reducer/setChannel';

import Username from '../components/Homepage/User/Username';
import ChannelSuggestion from '../components/Homepage/ChannelSuggestion/ChannelSuggestion';
import ContentForModal from '../components/ModalContent/ContentForModal';
import { ModalContent } from '../components/ModalContent/ModalContent';
import UnverifiedChannel from '../components/ChannelProfile/UnverifiedChannel';
import VerifiedChannel from '../components/ChannelProfile/VerifiedChannel';
import { ContentChannelSkeleton } from '../components/Skeleton';

import {
  ContainerProfile,
  OtherChannel,
} from '../styles/ChannelProfile/channelProfile.styled';

const Profile = () => {
  let router = useRouter();
  const { profile } = router.query;

  const dispatch = useDispatch();
  const { dataVerifiedChannel, dataUnverifiedChannel, isFetching } =
    useSelector(getDataChannelState);
  const { dataContentChannel } = useSelector(getDataContentChannelState);
  const { offset, onBottom } = useSelector(getDataOffsetState);
  const { dataStickersContent } = useSelector(getDataStickersContentState);

  console.log('kontent profile:', dataContentChannel);
  console.log('verified channel:', dataVerifiedChannel);
  console.log('unverified channel:', dataUnverifiedChannel);

  useEffect(() => {
    dispatch(setTrendingGIFsAction());
  }, [dispatch]);

  useEffect(() => {
    if (!profile) {
      return;
    }

    dispatch(setChannelUser(profile));
    dispatch(setContentChannelAction(profile, offset));
    dispatch(stickersContentAction(profile, offset));
    dispatch(setInfiniteScrollAction());
  }, [dispatch, offset, profile]);

  useEffect(() => {
    return () => {
      dispatch(setVerifiedChannel([]));
      dispatch(setUnverifiedChannel({}));
      dispatch(setResetOnPageChange([]));
      dispatch(setResetStickers([]));
    };
  }, [profile]);

  return (
    <>
      {router.query.content && (
        <ModalContent query={router.query.profile}>
          <ContentForModal />
        </ModalContent>
      )}

      <ContainerProfile>
        {dataVerifiedChannel.length === 0 ? (
          <UnverifiedChannel
            dataUnverifiedChannel={dataUnverifiedChannel}
            dataContentChannel={dataContentChannel}
            dataStickersContent={dataStickersContent}
            isFetching={isFetching}
            profile={profile}
          />
        ) : (
          <VerifiedChannel
            dataVerifiedChannel={dataVerifiedChannel}
            dataContentChannel={dataContentChannel}
            dataStickersContent={dataStickersContent}
            isFetching={isFetching}
            profile={profile}
          />
        )}

        {onBottom && <ContentChannelSkeleton count={6} />}
      </ContainerProfile>

      <OtherChannel>
        <Username />
        <ChannelSuggestion />
      </OtherChannel>
    </>
  );
};

export default Profile;
