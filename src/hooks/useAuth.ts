import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AuthLocalStorageHelper } from '../helpers/authLocalStorageHelper.ts';
import { AuthResponse } from '../models/response/AuthResponse.ts';
import AuthService from '../services/auth-service.ts';
import { authStore } from '../store/auth-store.ts';
import { AxiosResponse } from 'axios';

interface IData {
  email: string;
  username?: string;
  password: string;
}

export function useAuth() {
  const queryClient = useQueryClient();

  const login = useMutation({
    mutationFn: (data: IData) => {
      return AuthService.login(data.email, data.password);
    },
    onSuccess: (response: AxiosResponse<AuthResponse>) => {
      AuthLocalStorageHelper.setAccessTokenToLocalStorage(response.data.accessToken);
      authStore.setAuth(true);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const registration = useMutation({
    mutationFn: (data: IData) => {
      return AuthService.registration(data.email, data.username!, data.password);
    },
    onSuccess: (response: AxiosResponse<AuthResponse>) => {
      AuthLocalStorageHelper.setAccessTokenToLocalStorage(response.data.accessToken);
      authStore.setAuth(true);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const refresh: UseMutationResult<AxiosResponse> = useMutation({
    onMutate: () => {
      return AuthService.refresh();
    },
    onSuccess: (response) => {
      AuthLocalStorageHelper.setAccessTokenToLocalStorage(response?.data.accessToken);
    },
    onSettled: async () => {
      authStore.setAuth(true);
      await queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const logout = useMutation({
    onMutate: () => {
      return AuthService.logout();
    },
    onSettled: async () => {
      AuthLocalStorageHelper.removeAccessTokenFromLocalStorage();
      authStore.setAuth(false);
      await queryClient.resetQueries({ queryKey: ['user'] });
    },
  });

  return {
    registration,
    login,
    logout,
    refresh,
  };
}
