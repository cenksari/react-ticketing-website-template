import React from 'react';

import { AlertContext, initialState, type IAlert } from '../contexts/alertContext';

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlert] = React.useState<IAlert>(initialState.alert);

  const hideAlert = (): void => {
    setAlert(initialState.alert);
  };

  const showAlert = (payload: IAlert): void => {
    setAlert({ type: payload.type, text: payload.text, show: true });
  };

  return (
    <AlertContext.Provider value={{ alert, hideAlert, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
