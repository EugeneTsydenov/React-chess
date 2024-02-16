import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { authLocalStorageHelper } from '../helpers/authLocalStorageHelper.ts';
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
      const { setAccessTokenToLocalStorage } = authLocalStorageHelper();
      setAccessTokenToLocalStorage(response.data.accessToken);
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
      const { setAccessTokenToLocalStorage } = authLocalStorageHelper();
      setAccessTokenToLocalStorage(response.data.accessToken);
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
    onError: async (error, variables, context) => {
      if (context && context.status === 200) {
        const { setAccessTokenToLocalStorage } = authLocalStorageHelper();
        console.log(context.data.accessToken);
        setAccessTokenToLocalStorage(context.data.accessToken);
        authStore.setAuth(true);
        await queryClient.invalidateQueries({ queryKey: ['user'] });
      }
    },
  });

  const logout = useMutation({
    onMutate: () => {
      return AuthService.logout();
    },
    onSettled: async () => {
      const { removeAccessTokenFromLocalStorage } = authLocalStorageHelper();
      removeAccessTokenFromLocalStorage();
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
