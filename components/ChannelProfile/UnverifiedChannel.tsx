import Image from 'next/image';

import {
  GifPlaceholder,
  PlaceholderToBase64,
} from '../../components/GifPlaceholder';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

import {
  ChannelBanner,
  ChannelDesc,
  ChannelInfo,
  Content,
  ContentOverlay,
  ContentToggle,
  FeaturedContent,
  FeaturedWrap,
  WrapChannel,
} from '../../styles/ChannelProfile/channelProfile.styled';

import verifiedBadge from '../../public/icons/verifiedBadge.png';
import { ChannelSkeleton, ContentChannelSkeleton } from '../Skeleton';
import Link from 'next/link';

interface IData {
  dataUnverifiedChannel: any;
  dataContentChannel: any[];
  isFetching: boolean;
  profile: string | string[] | undefined;
}

const UnverifiedChannel = ({
  dataUnverifiedChannel,
  dataContentChannel,
  isFetching,
  profile,
}: IData) => {
  return (
    <WrapChannel>
      {isFetching && <ChannelSkeleton />}
      <ChannelInfo>
        {dataUnverifiedChannel.avatar_url && (
          <Image
            src={dataUnverifiedChannel.avatar_url}
            alt="ava"
            width={200}
            height={200}
          />
        )}

        <ChannelDesc>
          <h1>
            {dataUnverifiedChannel.display_name}
            {dataUnverifiedChannel.is_verified === true ? (
              <Image
                src={verifiedBadge}
                alt="isVerified"
                width={30}
                height={30}
                draggable="false"
              />
            ) : (
              ''
            )}
          </h1>

          {dataUnverifiedChannel.username && (
            <p>@{dataUnverifiedChannel.username}</p>
          )}

          <p>{dataUnverifiedChannel.description}</p>

          <a
            href={`${dataUnverifiedChannel.website_url}`}
            target="_blank"
            rel="noreferrer"
          >
            {dataUnverifiedChannel.website_url}
          </a>
        </ChannelDesc>
      </ChannelInfo>

      {dataUnverifiedChannel.banner_url && (
        <ChannelBanner>
          <Image
            src={dataUnverifiedChannel.banner_url}
            alt="banner"
            sizes="100%"
            width={0}
            height={0}
            priority
          />
        </ChannelBanner>
      )}

      <hr />

      <ContentToggle>
        <button>GIFs</button>
        <button>Stickers</button>
      </ContentToggle>

      {isFetching && <ContentChannelSkeleton count={6} />}

      <FeaturedContent>
        <FeaturedWrap>
          {dataContentChannel.map((gif) => (
            <Content key={gif.id}>
              <Link
                href={{
                  pathname: '/[profile]',
                  query: { profile: `${profile}`, content: `${gif.id}` },
                }}
                as={{
                  pathname: `/c/${gif.id}`,
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
                src={
                  gif.images.fixed_height.webp || gif.images.fixed_height.url
                }
                sizes="auto"
                width={
                  gif.images.fixed_height.width ||
                  gif.images.fixed_height_downsampled.width
                }
                height={
                  gif.images.fixed_height.height ||
                  gif.images.fixed_height_downsampled.height
                }
                alt="img"
                blurDataURL={`data:image/svg+xml;base64,${PlaceholderToBase64(
                  GifPlaceholder(
                    gif.images.fixed_height.width ||
                      gif.images.fixed_height_downsampled.width ||
                      50,
                    gif.images.fixed_height.height ||
                      gif.images.fixed_height_downsampled.height ||
                      50,
                  ),
                )}`}
                placeholder="blur"
              />
            </Content>
          ))}
        </FeaturedWrap>
      </FeaturedContent>
    </WrapChannel>
  );
};

export default UnverifiedChannel;
