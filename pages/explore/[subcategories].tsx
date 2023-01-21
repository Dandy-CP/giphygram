import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from '../../config/redux/store';
import setSubCategoriesAction from '../../config/redux/action/subCategories';
import { getDataSubCategories } from '../../config/redux/reducer/setSubCategories';
import { setSubCategories } from '../../config/redux/reducer/setSubCategories';

import {
  GifPlaceholder,
  PlaceholderToBase64,
} from '../../components/GifPlaceholder';
import { ExploreSkeleton } from '../../components/Skeleton';

import {
  ContainerExplore,
  FeaturedCategories,
  WrapCategories,
} from '../../styles/explore/explore.styled';

const Subcategories = () => {
  let router = useRouter();
  const { subcategories } = router.query;

  const dispatch = useDispatch();
  const { dataSubCategories, isFetching } = useSelector(getDataSubCategories);

  console.log('gif', dataSubCategories);

  useEffect(() => {
    if (!subcategories) {
      return;
    }

    dispatch(setSubCategoriesAction(subcategories));

    return () => {
      dispatch(setSubCategories([]));
    };
  }, [dispatch, subcategories]);

  return (
    <ContainerExplore>
      <WrapCategories>
        {isFetching && <ExploreSkeleton count={15} />}

        {dataSubCategories.map((list) => (
          <Link href={`../search/${list.name_encoded}`} key={list.name_encoded}>
            <FeaturedCategories>
              <p>{list.name.toUpperCase()}</p>

              {list.thisgif.map((gifs: any) => (
                <Image
                  key={gifs.id}
                  src={gifs.images.downsized.url}
                  alt={gifs.images.downsized.url}
                  width={gifs.images.downsized.width || 50}
                  height={gifs.images.downsized.height || 50}
                  blurDataURL={`data:image/svg+xml;base64,${PlaceholderToBase64(
                    GifPlaceholder(
                      gifs.images.downsized.width || 50,
                      gifs.images.downsized.height || 50,
                    ),
                  )}`}
                  placeholder="blur"
                  priority
                />
              ))}
            </FeaturedCategories>
          </Link>
        ))}
      </WrapCategories>
    </ContainerExplore>
  );
};

export default Subcategories;
