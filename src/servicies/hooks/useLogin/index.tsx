// import { IAuth, IResponseLogin, login, setToken } from '@/servicies';
import { setToken } from '@/servicies/keychain/token';
import { IAuth, IResponseLogin, login } from '@/servicies/login';
import { useMutation } from '@tanstack/react-query';

interface ILoginResponse {
  loginMutate: (payload: IAuth) => void;
  isSuccess: boolean;
  isError: boolean;
  isPending: boolean;
  data?: IResponseLogin | string;
}

export const useLogin = (): ILoginResponse => {
  const {
    mutate: loginMutate,
    isSuccess,
    isError,
    isPending,
    data,
  } = useMutation<IResponseLogin | string, Error, IAuth>({
    mutationKey: ['login'],
    mutationFn: (payload: IAuth) => login(payload),
    onSuccess: (data: IResponseLogin | string) => {
      if (typeof data !== 'string') {
        setToken(data.jwt);
      }
    },
  });

  return { loginMutate, isSuccess, isError, isPending, data };
};
