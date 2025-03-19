import { api } from '../api';

export const AuthApi = {
  login: async () => {
    return await api.get('/login.json');
  },
  recoveryPassword: async ({ email }: { email: string }) => {
    console.log(email);

    return await api.get('/forgot-password.json');
  },
};
