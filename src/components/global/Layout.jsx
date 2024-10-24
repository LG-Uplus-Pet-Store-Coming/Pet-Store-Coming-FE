import React from 'react';

import styled from '@emotion/styled';
import { Flex as Wrapper } from './Flex';
import Header from './Header';

function Layout({ children }) {
  return (
    <Wrapper direction="column" align="center">
      {/* Header 컴포넌트 import */}
      <Header />
      {children}
      {/* Footer 컴포넌트 import */}
    </Wrapper>
  );
}

export default Layout;
