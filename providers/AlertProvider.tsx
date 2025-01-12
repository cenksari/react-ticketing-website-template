'use client';

import { useState } from 'react';

import { AlertContext, initialState, type IAlert } from '../contexts/alertContext';

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlert] = useState<IAlert>(initialState.alert);

  const contextValue = {
    alert,
    hideAlert: () => setAlert(initialState.alert),
    showAlert: (payload: IAlert) => setAlert({ ...payload, show: true }),
  };

  return <AlertContext value={contextValue}>{children}</AlertContext>;
};

export default AlertProvider;
