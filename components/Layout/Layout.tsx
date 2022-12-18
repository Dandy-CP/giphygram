import React, { ReactNode } from 'react';

import { MainContainerHome } from '../../styles/Layout.styled';

import Navbar from '../Navbar/Navbar';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <MainContainerHome>
        <Navbar />
        {children}
      </MainContainerHome>
    </React.Fragment>
  );
};

export default Layout;
