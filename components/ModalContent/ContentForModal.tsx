import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from '../../config/redux/store';
import { getDataContentByIdState } from '../../config/redux/reducer/setGetContentByID';
import setGetContentByIdAction from '../../config/redux/action/getContentByID';

import { GifPlaceholder, PlaceholderToBase64 } from '../GifPlaceholder';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faHeart,
  faShare,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';

import {
  CardModalContent,
  CommentInput,
  CommentSection,
  ContentDescription,
  ContentInfo,
  CopyContent,
  EmbedContent,
  GIFsContent,
  MainContentCard,
  UserChannel,
} from '../../styles/Homepage/Timeline/modalContent.styled';

import {
  Bookmark,
  Comment,
  ContentAction,
  Like,
  Share,
} from '../../styles/Homepage/Timeline/timeline.styled';

import defaultAva from '../../public/userAva.gif';

const ContentForModal = () => {
  const [copyLink, setCopyLink] = useState(false);
  const [copyEmbedUrl, setCopyEmbedUrl] = useState(false);

  let router = useRouter();
  const { content } = router.query;

  const dispatch = useDispatch();
  const { contentByID } = useSelector(getDataContentByIdState);

  useEffect(() => {
    if (!content) {
      return;
    }

    dispatch(setGetContentByIdAction(content, false));
  }, [dispatch, content]);

  useEffect((): any => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  const embedLink: any = contentByID.map((data) => {
    return `<div style="width:100%;height:0;padding-bottom:54%;position:relative;"><iframe src=${data.embed_url} width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href=${data.url}>via GIPHY</a></p>`;
  });

  if (copyLink === true || copyEmbedUrl === true) {
    setTimeout(() => {
      setCopyLink(false);
      setCopyEmbedUrl(false);
    }, 3500);
  }

  return (
    <CardModalContent>
      {contentByID.map((data) => (
        <MainContentCard key={data.id}>
          <GIFsContent>
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
          </GIFsContent>

          <ContentDescription>
            <UserChannel>
              {data.user === undefined ? (
                <>
                  <Image src={defaultAva} width={40} height={40} alt="user" />
                  <h3>Unknow User</h3>
                </>
              ) : (
                <>
                  <Image
                    src={data.user.avatar_url}
                    width={40}
                    height={40}
                    alt={data.user.profile_url}
                  />

                  {data.user.display_name === '' ? (
                    <h3>{data.user.username}</h3>
                  ) : (
                    <h3>{data.user.display_name}</h3>
                  )}
                </>
              )}
            </UserChannel>

            <hr />

            <ContentInfo>
              <p>{data.title}</p>

              <CopyContent>
                <h3>Share GIFs</h3>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(data.images.downsized.url);
                    setCopyLink(true);
                  }}
                >
                  {copyLink ? 'Link Copied!' : 'Copy GIFs Link'}
                </button>
              </CopyContent>

              <EmbedContent>
                <h3>Embed GIFs</h3>

                <p>
                  Want to embed this GIF on your website or blog? Just drop in
                  the embed code below and you&apos;re done!
                </p>

                <input type="text" defaultValue={embedLink} />

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(embedLink);
                    setCopyEmbedUrl(true);
                  }}
                >
                  {copyEmbedUrl ? 'Link Copied!' : 'Copy'}
                </button>
              </EmbedContent>
            </ContentInfo>

            <CommentSection>
              <h4>Dandy Candra</h4>
              <p>Wah Bagus Euyy....</p>
            </CommentSection>

            <ContentAction style={{ marginLeft: '10px', marginRight: '10px' }}>
              <Like>
                <FontAwesomeIcon icon={faHeart} size={'lg'} />
              </Like>

              <Comment>
                <FontAwesomeIcon icon={faComments} size={'lg'} />
              </Comment>

              <Share>
                <FontAwesomeIcon icon={faShare} size={'lg'} />
              </Share>

              <Bookmark>
                <FontAwesomeIcon icon={faBookmark} size={'lg'} />
              </Bookmark>
            </ContentAction>

            <hr />

            <CommentInput>
              <textarea placeholder="Add a comment..."></textarea>
              <button>Post</button>
            </CommentInput>
          </ContentDescription>
        </MainContentCard>
      ))}
    </CardModalContent>
  );
};

export default ContentForModal;
