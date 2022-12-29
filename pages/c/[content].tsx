import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from '../../config/redux/store';
import { getDataContentByIdState } from '../../config/redux/reducer/setGetContentByID';
import { getDataContentChannelState } from '../../config/redux/reducer/setContentChannel';
import setGetContentByIdAction from '../../config/redux/action/getContentByID';
import setContentChannelAction from '../../config/redux/action/contentChannel';

import {
  GifPlaceholder,
  PlaceholderToBase64,
} from '../../components/GifPlaceholder';
import ContentForModal from '../../components/ModalContent/ContentForModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLink, faComment } from '@fortawesome/free-solid-svg-icons';

import {
  Contents,
  ContentOverlay,
  FeaturedContent,
  FeaturedWrap,
} from '../../styles/ChannelProfile/channelProfile.styled';

import {
  ContainerContent,
  UsernameFromContent,
  WrapContent,
} from '../../styles/Content/content.styled';

const Content = () => {
  let router = useRouter();
  const { content } = router.query;

  const dispatch = useDispatch();
  const { contentByID, errorHandling } = useSelector(getDataContentByIdState);
  const { dataContentChannel } = useSelector(getDataContentChannelState);

  const getUsernameContent = contentByID.map((data) => {
    return data.username;
  });

  useEffect(() => {
    if (!content) {
      return;
    }

    dispatch(setGetContentByIdAction(content, false));
    document.body.style.overflow = 'unset';
  }, [dispatch, content]);

  useEffect(() => {
    if (!getUsernameContent[0]) {
      return;
    }

    dispatch(setContentChannelAction(getUsernameContent[0], 0));
  }, [dispatch, content, contentByID]);

  if (errorHandling === 400 || errorHandling === 404) {
    router.push('/c');
  }

  return (
    <ContainerContent>
      <WrapContent>
        <ContentForModal />
      </WrapContent>

      <hr />

      <FeaturedContent>
        {getUsernameContent[0] === '' ? (
          <p></p>
        ) : (
          <UsernameFromContent>
            More content from
            <Link href={`/${getUsernameContent[0]}`}>
              {getUsernameContent[0]}
            </Link>
          </UsernameFromContent>
        )}

        <FeaturedWrap>
          {dataContentChannel.length === 0 ? (
            <p>This channel have no content to show</p>
          ) : (
            <>
              {dataContentChannel.slice(0, 6).map((gif) => (
                <Contents key={gif.id}>
                  <Link href={`/c/${gif.id}`}>
                    <ContentOverlay>
                      <FontAwesomeIcon icon={faLink} size={'xl'} />
                      <FontAwesomeIcon icon={faHeart} size={'xl'} /> <p>0</p>
                      <FontAwesomeIcon icon={faComment} size={'xl'} /> <p>0</p>
                    </ContentOverlay>
                  </Link>

                  <Image
                    src={
                      gif.images.fixed_height.webp ||
                      gif.images.fixed_height.url
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
                </Contents>
              ))}
            </>
          )}
        </FeaturedWrap>
      </FeaturedContent>
    </ContainerContent>
  );
};

export default Content;
