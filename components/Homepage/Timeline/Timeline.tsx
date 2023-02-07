import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch, useSelector } from '../../../config/redux/store';
import { getDataTrendingState } from '../../../config/redux/reducer/setTrendingGIFs';
import setTrendingGIFsAction from '../../../config/redux/action/trendingGIFs';
import { getDataOffsetState } from '../../../config/redux/reducer/setInfiniteScroll';
import setInfiniteScrollAction from '../../../config/redux/action/InfiniteScroll';
import { getDataUserProfile } from '../../../config/redux/reducer/setUserProfile';
import { setInputComment } from '../../../config/redux/reducer/setContentAction';
import {
  getDataContentAction,
  setLikedContent,
  setCommentedContent,
} from '../../../config/redux/reducer/setContentAction';
import {
  setGetCommentDataAction,
  setGetLikedDataAction,
  setAddNewCommentAction,
  setUpdateExistingCommentAction,
  setAddNewLikedAction,
  setUpdateExistingLikedAction,
} from '../../../config/redux/action/contentAction';

import { GifPlaceholder, PlaceholderToBase64 } from '../../GifPlaceholder';
import { TimelineSkeleton } from '../../Skeleton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBookmark as bookmarkFilled,
  faHeart as heartFilled,
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
  InputComment,
  LatestComment,
  UserComment,
  Commented,
} from '../../../styles/Homepage/Timeline/timeline.styled';

import defaultAva from '../../../public/userAva.gif';
import verifiedBadge from '../../../public/icons/verifiedBadge.png';
import Loader from '../../../public/icons/loader.gif';

type Comment = {
  IDcontent?: string;
  avatar?: string | any;
  name: string | any;
  comment: string;
};

const Timeline = () => {
  const [userComment, setUserComment] = useState<Comment | any>({});

  const dispatch = useDispatch();
  const { dataTrendingGIFs, IsFetching } = useSelector(getDataTrendingState);
  const { offset, onBottom } = useSelector(getDataOffsetState);
  const { profile } = useSelector(getDataUserProfile);
  const { commentedBy, likedBy, inputComment } =
    useSelector(getDataContentAction);

  console.log(likedBy);

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

  const handleAddComment = (
    contentID: string,
    nameChannel: string,
    avatarChannel: string,
    contentTitle: string,
    content: string,
  ) => {
    resultDataTrendingContent.map((data) => {
      contentID === data.id
        ? setUserComment({
            IDcontent: contentID,
            avatar: profile.avatar,
            name: profile.name,
            comment: inputComment,
          })
        : data;
    });

    dispatch(setGetCommentDataAction(contentID));

    setTimeout(() => {
      commentedBy.length === 0
        ? setAddNewCommentAction(
            contentID,
            profile?.avatar,
            profile?.name,
            profile?.username,
            profile?.email,
            inputComment,
            nameChannel,
            avatarChannel,
            contentTitle,
            content,
          )
        : setUpdateExistingCommentAction(
            contentID,
            profile?.avatar,
            profile?.name,
            profile?.username,
            profile?.email,
            inputComment,
            nameChannel,
            avatarChannel,
            contentTitle,
            content,
          );
    }, 1500);

    dispatch(setCommentedContent([]));
  };

  const handleLikeContent = (
    contentID: string,
    nameChannel: string,
    avatarChannel: string,
    contentTitle: string,
    content: string,
  ) => {
    dispatch(setGetLikedDataAction(contentID));

    setTimeout(() => {
      likedBy.length === 0
        ? setAddNewLikedAction(
            contentID,
            profile?.avatar,
            profile?.name,
            profile?.username,
            profile?.email,
            nameChannel,
            avatarChannel,
            contentTitle,
            content,
          )
        : setUpdateExistingLikedAction(
            contentID,
            profile?.avatar,
            profile?.name,
            profile?.username,
            profile?.email,
            nameChannel,
            avatarChannel,
            contentTitle,
            content,
          );
    }, 1500);

    dispatch(setLikedContent([]));
  };

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
            <Like
              onClick={() => {
                handleLikeContent(
                  data.id,
                  data?.user.username,
                  data?.user.avatar_url,
                  data?.title,
                  data?.images.downsized.url,
                );
              }}
            >
              <FontAwesomeIcon icon={faHeart} size={'lg'} />
            </Like>

            <Comment>
              <Link
                href={`/?content=${data.id}`}
                as={`/c/${data.id}`}
                scroll={false}
              >
                <FontAwesomeIcon icon={faComment} size={'lg'} />
              </Link>
            </Comment>

            <Share>
              <FontAwesomeIcon icon={faShareFromSquare} size={'lg'} />
            </Share>

            <Bookmark>
              <FontAwesomeIcon icon={faBookmark} size={'lg'} />
            </Bookmark>
          </ContentAction>

          <TitleContent>
            <p>{data.title}</p>
          </TitleContent>

          <UserComment>
            <LatestComment>
              <Link
                href={`/?content=${data.id}`}
                as={`/c/${data.id}`}
                scroll={false}
              >
                <p>View all comments</p>
                {userComment.IDcontent === data.id ? (
                  <Commented>
                    <Image
                      src={profile.avatar}
                      alt="avatar"
                      width={20}
                      height={20}
                    />
                    <p>{userComment.name}</p>
                    <p>{userComment.comment}</p>
                  </Commented>
                ) : null}
              </Link>
            </LatestComment>

            <hr />

            <InputComment>
              <textarea
                placeholder="Add a comment..."
                // onFocus={() => {
                //   dispatch(setGetCommentDataAction(data.id));
                // }}
                onChange={(e) => {
                  dispatch(setInputComment(e.target.value));
                }}
              />

              {data.user === undefined ? (
                <button
                  onClick={() => {
                    handleAddComment(
                      data.id,
                      'Unknown User',
                      '',
                      data?.title,
                      data?.images.downsized.url,
                    );
                    dispatch(setInputComment(''));
                  }}
                >
                  Post
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleAddComment(
                      data.id,
                      data?.user.username,
                      data?.user.avatar_url,
                      data?.title,
                      data?.images.downsized.url,
                    );
                    dispatch(setInputComment(''));
                  }}
                >
                  Post
                </button>
              )}
            </InputComment>
          </UserComment>
        </CardContent>
      ))}
      {onBottom && (
        <Image src={Loader} alt="Loading..." width={150} height={150} />
      )}
    </WrapContent>
  );
};

export default Timeline;
