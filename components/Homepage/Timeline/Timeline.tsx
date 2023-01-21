import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch, useSelector } from '../../../config/redux/store';
import { getDataTrendingState } from '../../../config/redux/reducer/setTrendingGIFs';
import setTrendingGIFsAction from '../../../config/redux/action/trendingGIFs';
import { getDataOffsetState } from '../../../config/redux/reducer/setInfiniteScroll';
import setInfiniteScrollAction from '../../../config/redux/action/InfiniteScroll';

import { GifPlaceholder, PlaceholderToBase64 } from '../../GifPlaceholder';
import ContentComment from '../../Comment/ContentComment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faHeart,
  faShare,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';

import {
  Bookmark,
  CardContent,
  Comment,
  ContentAction,
  GifContent,
  Like,
  Share,
  TitleContent,
  UserChannel,
  WrapContent,
} from '../../../styles/Homepage/Timeline/timeline.styled';

import defaultAva from '../../../public/userAva.gif';
import verifiedBadge from '../../../public/icons/verifiedBadge.png';
import Loader from '../../../public/icons/loader.gif';

import { TimelineSkeleton } from '../../Skeleton';

const Timeline = () => {
  const dispatch = useDispatch();
  const { dataTrendingGIFs, IsFetching } = useSelector(getDataTrendingState);
  const { offset, onBottom } = useSelector(getDataOffsetState);

  console.log(dataTrendingGIFs);

  useEffect(() => {
    dispatch(setTrendingGIFsAction(offset));
    dispatch(setInfiniteScrollAction());
  }, [dispatch, offset]);

  // Check duplicate content and remove them
  const resultDataTrendingContent = Array.from(
    new Set(dataTrendingGIFs.map((data: any) => data.id)),
  ).map((id) => {
    return dataTrendingGIFs.find((content: any) => content.id === id);
  });

  return (
    <WrapContent>
      {IsFetching && <TimelineSkeleton count={3} />}
      {resultDataTrendingContent.map((data: any) => (
        <CardContent key={data.id}>
          <UserChannel>
            {data.user === undefined ? (
              <>
                <Image src={defaultAva} width={40} height={40} alt="user" />
                <h1>Unknow User</h1>
              </>
            ) : (
              <>
                <Link
                  href={{
                    pathname: '/channel/[profile]',
                    query: { profile: `${data.user.username}` },
                  }}
                  as={`/${data.user.username}`}
                >
                  <Image
                    src={data.user.avatar_url}
                    width={40}
                    height={40}
                    alt={data.user.profile_url}
                  />
                </Link>

                <Link
                  href={{
                    pathname: '/channel/[profile]',
                    query: { profile: `${data.user.username}` },
                  }}
                  as={`/${data.user.username}`}
                >
                  {data.user.display_name === '' ? (
                    <h1>
                      {data.user.username}
                      {data.user.is_verified === true ? (
                        <Image
                          src={verifiedBadge}
                          alt="isVerified"
                          width={10}
                          height={10}
                          draggable="false"
                          style={{
                            width: '20px',
                            height: '20px',
                            marginLeft: '5px',
                          }}
                        />
                      ) : (
                        ''
                      )}
                    </h1>
                  ) : (
                    <h1>
                      {data.user.display_name}
                      {data.user.is_verified === true ? (
                        <Image
                          src={verifiedBadge}
                          alt="isVerified"
                          width={10}
                          height={10}
                          draggable="false"
                          style={{
                            width: '20px',
                            height: '20px',
                            marginLeft: '5px',
                          }}
                        />
                      ) : (
                        ''
                      )}
                    </h1>
                  )}
                </Link>
              </>
            )}
          </UserChannel>

          <GifContent>
            <Image
              src={data.images.downsized.url || data.images.downsized_large.url}
              alt={data.url}
              sizes="100%"
              width={
                data.images.downsized.width ||
                data.images.downsized_large.width ||
                0
              }
              height={
                data.images.downsized.height ||
                data.images.downsized_large.height ||
                0
              }
              blurDataURL={`data:image/svg+xml;base64,${PlaceholderToBase64(
                GifPlaceholder(
                  data.images.downsized.width ||
                    data.images.downsized_large.width ||
                    50,
                  data.images.downsized.height ||
                    data.images.downsized_large.height ||
                    50,
                ),
              )}`}
              placeholder="blur"
              draggable={false}
              priority
            />
          </GifContent>

          <ContentAction>
            <Like>
              <FontAwesomeIcon icon={faHeart} size={'lg'} />
            </Like>

            <Comment>
              <Link
                href={`/?content=${data.id}`}
                as={`/c/${data.id}`}
                scroll={false}
              >
                <FontAwesomeIcon icon={faComments} size={'lg'} />
              </Link>
            </Comment>

            <Share>
              <FontAwesomeIcon icon={faShare} size={'lg'} />
            </Share>

            <Bookmark>
              <FontAwesomeIcon icon={faBookmark} size={'lg'} />
            </Bookmark>
          </ContentAction>

          <TitleContent>
            <p>{data.title}</p>
          </TitleContent>

          <ContentComment />
        </CardContent>
      ))}
      {onBottom && (
        <Image src={Loader} alt="Loading..." width={150} height={150} />
      )}
    </WrapContent>
  );
};

export default Timeline;
