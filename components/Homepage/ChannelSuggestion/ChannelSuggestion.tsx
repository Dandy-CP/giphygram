import Image from 'next/image';
import Link from 'next/link';

import { useSelector } from '../../../config/redux/store';
import { getDataTrendingState } from '../../../config/redux/reducer/setTrendingGIFs';

import {
  Channel,
  ChannelWrap,
  ContainerSugestion,
  Copyright,
  FollowChannel,
} from '../../../styles/Homepage/ChannelSugestion/channelSugestion.styled';

import verifiedBadge from '../../../public/icons/verifiedBadge.png';
import { ChannelSugestionSkeleton } from '../../Skeleton';

const ChannelSuggestion = () => {
  const { dataTrendingGIFs, IsFetching } = useSelector(getDataTrendingState);

  const getChannelSugestion = dataTrendingGIFs.map((data) => {
    return data.user;
  });

  // Check if on Array have undifined value and remove them
  const filterUnregisUser = getChannelSugestion.filter((data) => {
    return data !== undefined;
  });

  // Check duplicate channel and remove them.
  const filterDuplicateChannel = Array.from(
    new Set(filterUnregisUser.map((channel) => channel.username)),
  ).map((username) => {
    return filterUnregisUser.find((channel) => channel.username === username);
  });

  const getRandomChannel = (channel: any[], count: number) => {
    const getChannel = [...channel].sort(() => 0.5 - Math.random());

    return getChannel.slice(0, count);
  };

  const resultChannelSugestion = getRandomChannel(filterDuplicateChannel, 5);

  return (
    <ContainerSugestion>
      <p>Channel suggestion for you</p>
      <ChannelWrap>
        {IsFetching && <ChannelSugestionSkeleton count={5} />}
        {resultChannelSugestion.map((list, index) => (
          <Channel key={index}>
            <Image src={list.avatar_url} alt="ava" width={40} height={40} />

            {list.display_name === '' ? (
              <Link href={`/${list.username}`}>
                <p>
                  {list.username.slice(0, 25)}
                  {list.is_verified === true ? (
                    <Image
                      src={verifiedBadge}
                      alt="isVerified"
                      width={10}
                      height={10}
                      draggable="false"
                      style={{
                        width: '15px',
                        height: '15px',
                        marginLeft: '5px',
                      }}
                    />
                  ) : (
                    ''
                  )}
                </p>
              </Link>
            ) : (
              <Link href={`/${list.username}`}>
                <p>
                  {list.display_name.slice(0, 25)}
                  {list.is_verified === true ? (
                    <Image
                      src={verifiedBadge}
                      alt="isVerified"
                      width={10}
                      height={10}
                      draggable="false"
                      style={{
                        width: '15px',
                        height: '15px',
                        marginLeft: '5px',
                      }}
                    />
                  ) : (
                    ''
                  )}
                </p>
              </Link>
            )}

            <FollowChannel>
              <p>Follow</p>
            </FollowChannel>
          </Channel>
        ))}
      </ChannelWrap>

      <Copyright>
        <p>
          Made and coded By
          <a
            href="https://github.com/Dandy-CP"
            target="_blank"
            rel="noreferrer"
          >
            Dandy Candra
          </a>
          . All rights reserved
        </p>

        <p>
          All Content belongs to
          <a
            href="https://developers.giphy.com/"
            target="_blank"
            rel="noreferrer"
          >
            Giphy API
          </a>
          .
        </p>
      </Copyright>
    </ContainerSugestion>
  );
};

export default ChannelSuggestion;
