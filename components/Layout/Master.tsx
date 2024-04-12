'use client';

import React from 'react';

import AlertProvider from '@contexts/alertContext';

import Alert from '@components/Alert/Alert';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

interface IProps {
  children: React.ReactNode;
}

const Master = ({ children }: IProps): React.JSX.Element => (
  <AlertProvider>
    <Alert />
    <Header />
    {children}
    <Footer />
  </AlertProvider>
);

export default Master;
