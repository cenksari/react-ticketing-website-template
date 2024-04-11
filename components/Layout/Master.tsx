import React from 'react';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

interface Props {
  children: React.ReactNode;
}

const Master = ({ children }: Props): React.JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Master;
