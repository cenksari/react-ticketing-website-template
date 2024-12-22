'use client';

import { useMemo, useState } from 'react';

import { AlertContext, initialState, type IAlert } from '../contexts/alertContext';

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlert] = useState<IAlert>(initialState.alert);

  const contextValue = useMemo(
    () => ({
      alert,
      hideAlert: () => setAlert(initialState.alert),
      showAlert: (payload: IAlert) => setAlert({ ...payload, show: true }),
    }),
    [alert]
  );

  return <AlertContext.Provider value={contextValue}>{children}</AlertContext.Provider>;
};

export default AlertProvider;
