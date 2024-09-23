import { setToken } from '@/servicies/keychain/token';
import { IAuth, IResponseLogin, login } from '@/servicies/login';
import { useMutation } from '@tanstack/react-query';

interface ILoginResponse {
  loginMutate: (payload: IAuth) => void;
  isSuccess: boolean;
  isError: boolean;
  isPending: boolean;
  data?: IResponseLogin;
}

export const useLogin = (): ILoginResponse => {
  const {
    mutate: loginMutate,
    isSuccess,
    isError,
    isPending,
    data,
  } = useMutation<IResponseLogin, Error, IAuth>({
    mutationKey: ['login'],
    mutationFn: (payload: IAuth) => login(payload),
    onSuccess: (data: IResponseLogin) => {
      if (data.jwt) {
        setToken(data.jwt);
      }
    },
  });

  return { loginMutate, isSuccess, isError, isPending, data };
};
