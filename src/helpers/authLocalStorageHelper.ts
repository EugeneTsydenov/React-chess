export function authLocalStorageHelper() {
  const key = 'accessToken';

  function setAccessTokenToLocalStorage(value: string) {
    localStorage.setItem(key, value);
  }

  function checkAuth() {
    return localStorage.getItem(key);
  }

  function removeAccessTokenFromLocalStorage() {
    localStorage.removeItem(key);
  }

  function getAccessTokenFromLocalStorage() {
    return localStorage.getItem(key)
  }


  return {
    setAccessTokenToLocalStorage,
    checkAuth,
    removeAccessTokenFromLocalStorage,
    getAccessTokenFromLocalStorage
  };
}
