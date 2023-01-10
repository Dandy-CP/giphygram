import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch, useSelector } from '../../config/redux/store';
import setCategoriesContentAction from '../../config/redux/action/categories';
import { getDataCategories } from '../../config/redux/reducer/setCategories';

import {
  GifPlaceholder,
  PlaceholderToBase64,
} from '../../components/GifPlaceholder';

import {
  ContainerExplore,
  FeaturedCategories,
  WrapCategories,
} from '../../styles/explore/explore.styled';

const IndexExplore = () => {
  const dispatch = useDispatch();
  const { dataCategories } = useSelector(getDataCategories);

  console.log(dataCategories);

  useEffect(() => {
    dispatch(setCategoriesContentAction());
  }, [dispatch]);

  return (
    <ContainerExplore>
      <WrapCategories>
        {dataCategories.map((data) => (
          <Link href={`explore/${data.name_encoded}`} key={data.name}>
            <FeaturedCategories>
              <p>{data.name.toUpperCase()}</p>
              <Image
                src={data.gif.images.downsized.url}
                alt={data.gif.images.downsized.url}
                width={data.gif.images.downsized.width || 50}
                height={data.gif.images.downsized.height || 50}
                blurDataURL={`data:image/svg+xml;base64,${PlaceholderToBase64(
                  GifPlaceholder(
                    data.gif.images.downsized.width || 50,
                    data.gif.images.downsized.height || 50,
                  ),
                )}`}
                placeholder="blur"
                priority
              />
            </FeaturedCategories>
          </Link>
        ))}
      </WrapCategories>
    </ContainerExplore>
  );
};

export default IndexExplore;
