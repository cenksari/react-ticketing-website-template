import React from 'react';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Master = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Master;
