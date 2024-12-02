const validUrl = require('valid-url');


const isValidUrl = (url) => Boolean(validUrl.isWebUri(`${url}`));

module.exports = {
    isValidUrl,
};
// In ./src/client/js/checkURL.js
export const checkURL = (url) => {
    try {
      new URL(url);  // This will throw if the URL is invalid
      return true;    // If no error is thrown, it's a valid URL
    } catch (e) {
      return false;   // If an error is thrown, it's an invalid URL
    }
  };