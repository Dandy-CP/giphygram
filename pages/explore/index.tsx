import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ContainerExplore,
  FeaturedCategories,
  WrapCategories,
} from '../../styles/explore/explore.styled';
import { Categories } from '../../config/GhipyAPI/endpointGifApi';
import { apiKey } from '../../config/GhipyAPI/apiKey';
import Image from 'next/image';
import Link from 'next/link';

const IndexExplore = () => {
  const [categoriesContent, setCategoriesContent] = useState<any[]>([]);

  console.log(categoriesContent);

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const res = await axios(Categories, {
          params: {
            api_key: apiKey,
          },
        }).catch((error) => {
          console.log(error);
          throw error;
        });
        setCategoriesContent(res.data.data);
      };
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ContainerExplore>
      <h1>Categories</h1>
      <WrapCategories>
        {categoriesContent.map((data) => (
          <Link href={`explore/${data.name_encoded}`} key={data.name}>
            <FeaturedCategories>
              <p>{data.name.toUpperCase()}</p>
              <Image
                src={data.gif.images.downsized.url}
                alt={data.gif.images.downsized.url}
                width={0}
                height={0}
              />
            </FeaturedCategories>
          </Link>
        ))}
      </WrapCategories>
    </ContainerExplore>
  );
};

export default IndexExplore;
