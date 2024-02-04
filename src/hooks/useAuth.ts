import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { authLocalStorageHelper } from '../helpers/authLocalStorageHelper.ts';
import AuthService from '../services/AuthService.ts';
import { authStore } from '../store/store.ts';
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
    onSuccess: () => {
      const { setAuthToLocalStorage } = authLocalStorageHelper();
      setAuthToLocalStorage();
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
    onSuccess: () => {
      const { setAuthToLocalStorage } = authLocalStorageHelper();
      setAuthToLocalStorage();
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
    onSuccess: () => {
      const { setAuthToLocalStorage } = authLocalStorageHelper();
      setAuthToLocalStorage();
    },
    onSettled: async () => (
      await queryClient.invalidateQueries({ queryKey: ['user'] }), authStore.setAuth(true)
    ),
    onError: () => {
      queryClient.removeQueries({ queryKey: ['user'] });
      authStore.setAuth(false);
    },
  });

  const logout = useMutation({
    onMutate: () => {
      return AuthService.logout();
    },
    onSettled: async () => {
      const { removeAuthFromLocalStorage } = authLocalStorageHelper();
      removeAuthFromLocalStorage();
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
