/**
 * Check if local storage is available in the browser.
 */

/**
 * @return {boolean}
 */
function checkLocalStorage() {
  try {
    const storage = window['localStorage'],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return false;
  }
}

export default checkLocalStorage;
