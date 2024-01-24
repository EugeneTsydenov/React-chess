import $api, {BASE_API_URL} from "../http/main.ts";
import axios, {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse.ts";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/login', {email, password})
  }

  static async registration(email:string, password:string) {
    return $api.post('/registration', {email, password})
  }

  static async refresh() {
    return axios.get(`${BASE_API_URL}/refresh`, {withCredentials: true})
  }

  static async logout(): Promise<void> {
    return $api.post('/logout')
  }
}