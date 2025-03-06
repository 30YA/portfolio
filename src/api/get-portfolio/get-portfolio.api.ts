import { useQuery } from '@tanstack/react-query';

import Client from '@/lib/client.utility';
import { type GetPortfolioResType } from '@/types/get-portfolio.type';

export type GetPortfolioType = (person: string) => Promise<GetPortfolioResType>;

export const getPortfolio: GetPortfolioType = async (person) => {
  const client = new Client();

  return await client.get(
    `/GetPortfolito/%7BName%7D?Name=${window.location.host}`
  );
};

export default function useGetPortfolio(person: string) {
  return useQuery({
    queryKey: ['Get-Portfolio'],

    queryFn: async () => await getPortfolio(person),

    retry: 1,

    staleTime: 600000,
  });
}
