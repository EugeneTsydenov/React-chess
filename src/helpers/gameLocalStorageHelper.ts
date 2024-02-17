export class GameLocalStorageHelper {
  private static localStorageKey = 'roomId';

  public static setRoomIdToLocalStorage(roomId: string) {
    localStorage.setItem(this.localStorageKey, roomId);
  }

  public static getRoomIdFromLocalStorage() {
    return localStorage.getItem(this.localStorageKey);
  }

  public static removeRoomIdFromLocalStorage() {
    localStorage.removeItem(this.localStorageKey);
  }

  public static isInGame() {
    return !!localStorage.getItem(this.localStorageKey);
  }
}
