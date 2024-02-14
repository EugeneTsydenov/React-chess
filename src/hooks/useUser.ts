import AuthService from '../services/AuthService.ts';
import { useQuery } from '@tanstack/react-query';
import { authStore } from '../store/authStore.ts';
import { IUser } from '../models/IUser.ts';

function useUser() {
  return useQuery<IUser, Error>({
    queryKey: ['user'],
    queryFn: async () => {
      if (authStore.isAuth) {
        const response = await AuthService.getUser();
        return response.data;
      }
    },
    enabled: authStore.isAuth,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

export default useUser;
