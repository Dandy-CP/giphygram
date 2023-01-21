import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { UserAuth } from '../config/context/AuthContext';

import { useDispatch, useSelector } from '../config/redux/store';
import setUserProfileAction from '../config/redux/action/userProfile';
import { getDataUserProfile } from '../config/redux/reducer/setUserProfile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

import Username from '../components/Homepage/User/Username';
import ChannelSuggestion from '../components/Homepage/ChannelSuggestion/ChannelSuggestion';

import {
  ContainerProfile,
  ChannelBanner,
  ChannelDesc,
  ChannelInfo,
  Content,
  ContentOverlay,
  FeaturedContent,
  FeaturedWrap,
  WrapChannel,
  OtherChannel,
  ProfileFolowingSection,
  UsernameProfile,
} from '../styles/ChannelProfile/channelProfile.styled';
import {
  Toggle,
  ToggleGIF,
  ToggleSticker,
} from '../styles/Search/search.styled';

import DefaultAva from '../public/userAva.gif';

const MyProfile = () => {
  const [toggle, setToggle] = useState(true);
  const { user } = UserAuth();

  const dispatch = useDispatch();
  const { profile, posted, following, saved } = useSelector(getDataUserProfile);

  useEffect(() => {
    if (!user?.email) {
      return;
    }

    dispatch(setUserProfileAction(user?.email));
  }, [dispatch, user?.email]);

  return (
    <>
      <ContainerProfile>
        <WrapChannel>
          <ChannelInfo>
            {profile.avatar === null || user.isAnonymous === true ? (
              <Image src={DefaultAva} alt="DefaultAva" width={50} height={50} />
            ) : (
              <Image
                src={profile.avatar}
                alt="UserAvatar"
                width={50}
                height={50}
              />
            )}

            <ChannelDesc>
              {user.displayName === null ? (
                <h1>Unknow User</h1>
              ) : (
                <UsernameProfile>
                  <h1>{profile.name}</h1>
                  <button>Edit Profile</button>
                </UsernameProfile>
              )}

              <p>@{profile.username}</p>

              <ProfileFolowingSection>
                <p>0 Posted</p>
                <p>0 Following</p>
                <p>0 Saved</p>
                <p>0 Content Liked</p>
              </ProfileFolowingSection>

              {/* <p>ini description</p>

              <a href={''} target="_blank" rel="noreferrer">
                www.gombel.com
              </a> */}
            </ChannelDesc>
          </ChannelInfo>

          {/* <ChannelBanner>
            <Image
              src={''}
              alt="banner"
              sizes="100%"
              width={0}
              height={0}
              priority
            />
          </ChannelBanner> */}

          <hr />

          <Toggle style={{ marginBottom: '0px', marginTop: '20px' }}>
            <ToggleGIF
              onClick={() => {
                setToggle(true);
              }}
              gif={toggle}
            >
              Posted
            </ToggleGIF>

            <ToggleSticker
              onClick={() => {
                setToggle(false);
              }}
              stickers={toggle}
            >
              Saved
            </ToggleSticker>
          </Toggle>

          <FeaturedContent>
            <FeaturedWrap>
              <Content>
                <Link
                  href={{
                    pathname: '/[profile]',
                    query: {
                      profile: ``,
                      content: ``,
                    },
                  }}
                  as={{
                    pathname: `/c/`,
                  }}
                  scroll={false}
                >
                  <ContentOverlay>
                    <FontAwesomeIcon icon={faLink} size={'xl'} />
                    <FontAwesomeIcon icon={faHeart} size={'xl'} /> <p>0</p>
                    <FontAwesomeIcon icon={faComment} size={'xl'} /> <p>0</p>
                  </ContentOverlay>
                </Link>

                <Image
                  src={DefaultAva}
                  sizes="auto"
                  width={0}
                  height={0}
                  alt="img"
                />
              </Content>
            </FeaturedWrap>
          </FeaturedContent>
        </WrapChannel>
      </ContainerProfile>

      <OtherChannel>
        <Username />
        <ChannelSuggestion />
      </OtherChannel>
    </>
  );
};

export default MyProfile;
