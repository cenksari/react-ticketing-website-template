/**
 * Checks if the provided string is a valid email address.
 *
 * @param {string} value - The string to be checked.
 * @return {boolean} - Returns true if the string is a valid email address, otherwise false.
 */
const isEmail = (value: string): boolean => {
  const pattern =
    /^([a-zA-Z0-9_\\-\\.+]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,5}|[0-9]{1,3})(\\]?)$/;

  return pattern.test(value);
};

/**
 * Checks if the provided string consists only of digits.
 *
 * @param {string} value - The string to be checked.
 * @return {boolean} - Returns true if the string consists only of digits, otherwise false.
 */
const isNumeric = (value: string): boolean => {
  const pattern = /^\d+$/;

  return pattern.test(value);
};

/**
 * Checks if the provided string is a strong password.
 *
 * @param {string} value - The string to be checked.
 * @return {boolean} - Returns true if the string is a strong password, otherwise false.
 */
const isStrongPassword = (value: string): boolean => {
  const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

  return pattern.test(value);
};

/**
 * Formats a number as a currency string in GBP with the symbol.
 *
 * @param {number} value - The number to be formatted.
 * @return {string} The formatted currency string.
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
