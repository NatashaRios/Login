import { IServerUser } from '@/interfaces';
import { getUser } from '@/servicies/user';
import { useQuery } from '@tanstack/react-query';

interface IGetUser {
  data?: IServerUser;
  isLoading: boolean;
  isError: boolean;
}

export const useGetUser = (): IGetUser => {
  const { data, isLoading, isError } = useQuery<IServerUser | undefined>({
    queryKey: ['getUser'],
    queryFn: getUser,
  });

  return { data, isLoading, isError };
};
