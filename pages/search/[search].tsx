import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { useDispatch, useSelector } from '../../config/redux/store';
import setContentSearchedAction from '../../config/redux/action/contentSearched';
import setSearchStickersAction from '../../config/redux/action/searchStickers';
import { getDataContentSearched } from '../../config/redux/reducer/setContentSearched';
import { getDataSearchStickers } from '../../config/redux/reducer/setSearchStickers';
import { getDataOffsetState } from '../../config/redux/reducer/setInfiniteScroll';
import setInfiniteScrollAction from '../../config/redux/action/InfiniteScroll';
import { setResetOnChange } from '../../config/redux/reducer/setContentSearched';
import { setResetStickersSearch } from '../../config/redux/reducer/setSearchStickers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

import {
  GifPlaceholder,
  PlaceholderToBase64,
} from '../../components/GifPlaceholder';
import ContentForModal from '../../components/ModalContent/ContentForModal';
import { ModalContent } from '../../components/ModalContent/ModalContent';
import IndexSearch from '.';

import {
  ContainerSearch,
  ContentSearch,
  Toggle,
  ToggleGIF,
  ToggleSticker,
  UserOverlay,
} from '../../styles/Search/search.styled';
import {
  Content,
  ContentOverlay,
} from '../../styles/ChannelProfile/channelProfile.styled';

import DefaultAva from '../../public/userAva.gif';
import VerifiedBadge from '../../public/icons/verifiedBadge.png';

const SearchQuery = () => {
  let router = useRouter();
  const [titleQuery, setTitleQuery] = useState('');
  const [toggle, setToggle] = useState(true);

  const { search } = router.query;
  const thisQuery: any = search;

  const dispatch = useDispatch();
  const { dataContentSearched } = useSelector(getDataContentSearched);
  const { dataSearchStickers } = useSelector(getDataSearchStickers);
  const { offset } = useSelector(getDataOffsetState);

  console.log(dataContentSearched);
  console.log(search);

  useEffect(() => {
    if (!thisQuery) return;

    dispatch(setContentSearchedAction(thisQuery, offset));
    dispatch(setSearchStickersAction(thisQuery, offset));
    dispatch(setInfiniteScrollAction());
    setTitleQuery(thisQuery.replace(/-/g, ' '));
  }, [dispatch, thisQuery, offset]);

  useEffect(() => {
    return () => {
      dispatch(setResetOnChange([]));
      dispatch(setResetStickersSearch([]));
    };
  }, [search]);

  return (
    <>
      {router.query.content && (
        <ModalContent query={router.query.search}>
          <ContentForModal />
        </ModalContent>
      )}

      <IndexSearch titleQuery={titleQuery} />

      <ContainerSearch>
        <Toggle>
          <ToggleGIF
            onClick={() => {
              setToggle(true);
            }}
            gif={toggle}
          >
            GIFs
          </ToggleGIF>

          <ToggleSticker
            onClick={() => {
              setToggle(false);
            }}
            stickers={toggle}
          >
            Stickers
          </ToggleSticker>
        </Toggle>

        <ContentSearch>
          {!toggle ? (
            <>
              {dataSearchStickers.map((stickers) => (
                <Content key={stickers.id}>
                  <Link
                    href={{
                      pathname: '/search/[search]',
                      query: { search: `${search}`, content: `${stickers.id}` },
                    }}
                    as={{
                      pathname: `/c/${stickers.id}`,
                    }}
                    scroll={false}
                  >
                    <ContentOverlay>
                      <FontAwesomeIcon icon={faLink} size={'xl'} />
                      <FontAwesomeIcon icon={faHeart} size={'xl'} /> <p>0</p>
                      <FontAwesomeIcon icon={faComment} size={'xl'} /> <p>0</p>
                      <UserOverlay>
                        {stickers.user === undefined ? (
                          <>
                            <Image
                              src={DefaultAva}
                              alt="Unknown User"
                              width={20}
                              height={20}
                            />
                            <p>Unkonw User</p>
                          </>
                        ) : (
                          <>
                            <Image
                              src={stickers.user.avatar_url || DefaultAva}
                              alt={stickers.user.display_name}
                              width={20}
                              height={20}
                            />
                            <p>{stickers.user.display_name}</p>
                            {stickers.user.is_verified === true ? (
                              <Image
                                src={VerifiedBadge}
                                alt="Verified"
                                width={0}
                                height={0}
                                style={{ width: '16px', height: '16px' }}
                              />
                            ) : null}
                          </>
                        )}
                      </UserOverlay>
                    </ContentOverlay>
                  </Link>

                  <Image
                    src={
                      stickers.images.fixed_height.webp ||
                      stickers.images.fixed_height.url
                    }
                    sizes="auto"
                    width={
                      stickers.images.fixed_height.width ||
                      stickers.images.fixed_height_downsampled.width
                    }
                    height={
                      stickers.images.fixed_height.height ||
                      stickers.images.fixed_height_downsampled.height
                    }
                    alt="img"
                    blurDataURL={`data:image/svg+xml;base64,${PlaceholderToBase64(
                      GifPlaceholder(
                        stickers.images.fixed_height.width ||
                          stickers.images.fixed_height_downsampled.width ||
                          50,
                        stickers.images.fixed_height.height ||
                          stickers.images.fixed_height_downsampled.height ||
                          50,
                      ),
                    )}`}
                    placeholder="blur"
                  />
                </Content>
              ))}
            </>
          ) : (
            <>
              {dataContentSearched.map((gif) => (
                <Content key={gif.id}>
                  <Link
                    href={{
                      pathname: '/search/[search]',
                      query: { search: `${search}`, content: `${gif.id}` },
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
                      <UserOverlay>
                        {gif.user === undefined ? (
                          <>
                            <Image
                              src={DefaultAva}
                              alt="Unknown User"
                              width={20}
                              height={20}
                            />
                            <p>Unkonw User</p>
                          </>
                        ) : (
                          <>
                            <Image
                              src={gif.user.avatar_url || DefaultAva}
                              alt={gif.user.display_name}
                              width={20}
                              height={20}
                            />
                            <p>{gif.user.display_name}</p>
                            {gif.user.is_verified === true ? (
                              <Image
                                src={VerifiedBadge}
                                alt="Verified"
                                width={0}
                                height={0}
                                style={{ width: '16px', height: '16px' }}
                              />
                            ) : null}
                          </>
                        )}
                      </UserOverlay>
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
                </Content>
              ))}
            </>
          )}
        </ContentSearch>
      </ContainerSearch>
    </>
  );
};

export default SearchQuery;
