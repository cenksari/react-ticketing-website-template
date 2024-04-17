const isEmail = (value: string): boolean => {
  const pattern =
    /^([a-zA-Z0-9_\\-\\.+]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,5}|[0-9]{1,3})(\\]?)$/;

  return pattern.test(value);
};

const isNumeric = (value: string): boolean => {
  const pattern = /^d+$/;

  return pattern.test(value);
};

const isStrongPassword = (value: string): boolean => {
  const pattern = /^d$/;

  return pattern.test(value);
};

const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    currencyDisplay: 'symbol',
  }).format(value);

const ToolBox = {
  isEmail,
  isNumeric,
  formatCurrency,
  isStrongPassword,
};

export default ToolBox;
