import React from 'react';

import {AlertContext, type IAlert, initialState} from '../contexts/alertContext';

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlert] = React.useState<IAlert>(initialState.alert);

  /**
   * Hides the alert by setting it to its initial state.
   */
  const hideAlert = (): void => {
    setAlert(initialState.alert);
  };

  /**
   * Displays an alert with the specified type and text.
   *
   * @param {IAlert} payload - The alert payload containing the type and text of the alert.
   */
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
