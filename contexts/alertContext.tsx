'use client';

import React from 'react';

export interface IAlert {
  type: string;
  text: string;
  show?: boolean | false;
}

export interface IAlertContext {
  alert: IAlert;
  hideAlert: () => void;
  showAlert: (alert: IAlert) => void;
}

const initialState = {
  alert: { type: '', text: '', show: false },
  hideAlert: () => {},
  showAlert: () => {},
};

export const AlertContext = React.createContext<IAlertContext>(initialState);

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlert] = React.useState<IAlert>({ type: '', text: '', show: false });

  const hideAlert = (): void => {
    setAlert({ type: '', text: '', show: false });
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
