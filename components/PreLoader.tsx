import React from 'react';
import Image from 'next/image';

import { Preloader } from '../styles/PreLoader.styled';
import LoaderGif from '../public/icons/loader.gif';

const PreLoader = () => {
  return (
    <Preloader>
      <Image
        src={LoaderGif}
        width={150}
        alt="logo"
        draggable="false"
        priority
      />
    </Preloader>
  );
};

export default PreLoader;
