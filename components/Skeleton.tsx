import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { CardContent } from '../styles/Homepage/Timeline/timeline.styled';

import {
  CommentSkeleton,
  ContentSkeleton,
  TitleSkeleton,
  UserSkeleton,
  WrapSkeleton,
} from '../styles/Skeleton.styled';

import {
  ChannelBanner,
  ChannelDesc,
  ChannelInfo,
  WrapChannel,
} from '../styles/ChannelProfile/channelProfile.styled';

import {
  Channel,
  FollowChannel,
} from '../styles/Homepage/ChannelSugestion/channelSugestion.styled';

import { FeaturedCategories } from '../styles/explore/explore.styled';

interface ICount {
  count: number;
}

export const TimelineSkeleton = ({ count }: ICount) => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <CardContent key={index}>
            <UserSkeleton>
              <Skeleton circle={true} width={40} height={40} />
              <Skeleton width={300} height={20} />
            </UserSkeleton>

            <ContentSkeleton>
              <Skeleton height={400} />
            </ContentSkeleton>

            <TitleSkeleton>
              <Skeleton />
            </TitleSkeleton>

            <CommentSkeleton>
              <Skeleton width={350} height={20} count={3} />
            </CommentSkeleton>
          </CardContent>
        ))}
    </SkeletonTheme>
  );
};

export const ContentChannelSkeleton = ({ count }: ICount) => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <WrapSkeleton>
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <>
              {window.devicePixelRatio === 1.25 ? (
                <Skeleton width={222} height={200} key={index} />
              ) : (
                <Skeleton width={322} height={300} key={index} />
              )}
            </>
          ))}
      </WrapSkeleton>
    </SkeletonTheme>
  );
};

export const ChannelSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <WrapChannel>
        <ChannelInfo>
          {window.devicePixelRatio === 1.25 ? (
            <Skeleton width={150} height={150} />
          ) : (
            <Skeleton width={200} height={200} />
          )}

          <ChannelDesc>
            <Skeleton width={300} height={30} />
            <br />
            <Skeleton width={150} height={20} />
            <br />
            <Skeleton width={500} height={10} count={5} />
          </ChannelDesc>
        </ChannelInfo>

        <ChannelBanner>
          {window.devicePixelRatio === 1.25 ? (
            <Skeleton width={700} height={150} />
          ) : (
            <Skeleton width={950} height={150} />
          )}
        </ChannelBanner>
      </WrapChannel>
    </SkeletonTheme>
  );
};

export const ChannelSugestionSkeleton = ({ count }: ICount) => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Channel key={index}>
            <Skeleton circle={true} width={40} height={40} />

            <Skeleton width={150} height={20} style={{ marginLeft: '20px' }} />

            <FollowChannel>
              <Skeleton width={80} height={30} />
            </FollowChannel>
          </Channel>
        ))}
    </SkeletonTheme>
  );
};

export const ExploreSkeleton = ({ count }: ICount) => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <FeaturedCategories key={index}>
            <Skeleton width={250} height={120} />
          </FeaturedCategories>
        ))}
    </SkeletonTheme>
  );
};
