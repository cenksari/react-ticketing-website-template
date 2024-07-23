'use client';

import React from 'react';

// providers
import AlertProvider from '@providers/AlertProvider';

// components
import Alert from '@components/Alert/Alert';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const Master = ({ children }: IProps): React.JSX.Element => (
  <div className='light-theme'>
    <AlertProvider>
      <Alert />
      <Header />
      {children}
      <Footer />
    </AlertProvider>
  </div>
);

export default Master;
