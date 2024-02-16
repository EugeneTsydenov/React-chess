export function gameLocalStorageHelper() {
  const key = 'roomId';

  function setRoomIdToLocalStorage(value: string) {
    localStorage.setItem(key, value);
  }

  function checkUserPlaying() {
    return localStorage.getItem(key);
  }

  function removeRoomIdFromLocalStorage() {
    localStorage.removeItem(key);
  }

  function getRoomIdFromLocalStorage() {
    return localStorage.getItem(key);
  }

  return {
    setRoomIdToLocalStorage,
    checkUserPlaying,
    removeRoomIdFromLocalStorage,
    getRoomIdFromLocalStorage,
  };
}
