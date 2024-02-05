export function authLocalStorageHelper() {
  const key = 'isAuth';
  const value = 'true';

  function setAuthToLocalStorage() {
    localStorage.setItem(key, value);
  }

  function checkAuth() {
    return localStorage.getItem(key) === value;
  }

  function removeAuthFromLocalStorage() {
    localStorage.removeItem(key);
  }

  return {
    setAuthToLocalStorage,
    checkAuth,
    removeAuthFromLocalStorage,
  };
}
