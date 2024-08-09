import React from 'react';

import {AlertContext, type IAlertContext} from '@contexts/alertContext';

const useAlert = (): IAlertContext => {
  const { alert, hideAlert, showAlert } = React.useContext(AlertContext);

  return { alert, hideAlert, showAlert };
};

export default useAlert;
