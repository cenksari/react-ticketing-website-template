/**
 * Check string is valid e-mail address.
 *
 * @param {string} value - E-mail address
 * @return {boolean} - boolean result
 */
const isEmail = (value: string): boolean => {
  const pattern =
    /^([a-zA-Z0-9_\\-\\.+]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,5}|[0-9]{1,3})(\\]?)$/;

  return pattern.test(value);
};

/**
 * Check string is valid number format.
 *
 * @param {string} value - Number
 * @return {boolean} - boolean result
 */
const isNumeric = (value: string): boolean => {
  const pattern = /^d+$/;

  return pattern.test(value);
};

/**
 * Check string is valid password.
 *
 * @param {string} value - Password
 * @return {boolean} - boolean result
 */
const isStrongPassword = (value: string): boolean => {
  const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

  return pattern.test(value);
};

/**
 * Format number as british currency.
 *
 * @param {number} value - Currency
 * @return {string} - Formatted string value
 */
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
