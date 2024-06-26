'use client';

import React from 'react';

import AlertProvider from '@providers/AlertProvider';

import Alert from '@components/Alert/Alert';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

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
