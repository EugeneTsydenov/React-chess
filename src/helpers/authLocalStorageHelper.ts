export class AuthLocalStorageHelper {
  private static localStorageKey = 'accessToken';

  public static setAccessTokenToLocalStorage(accessToken: string) {
    localStorage.setItem(this.localStorageKey, accessToken);
  }

  public static getAccessTokenFromLocalStorage() {
    return localStorage.getItem(this.localStorageKey);
  }

  public static removeAccessTokenFromLocalStorage() {
    localStorage.removeItem(this.localStorageKey);
  }

  public static isAuth() {
    return !!localStorage.getItem(this.localStorageKey);
  }
}
