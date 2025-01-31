import { useQuery } from '@tanstack/react-query';

import Client from '@/lib/client.utility';
import { type GetPortfolioResType } from '@/types/get-portfolio.type';

export type GetPortfolioType = () => Promise<GetPortfolioResType>;

export const getPortfolio: GetPortfolioType = async () => {
  const client = new Client();

  return await client.get('/GetPortfolito/%7BName%7D?Name=Taha-Haghighi');
};

export default function useGetPortfolio() {
  return useQuery({
    queryKey: ['Get-Portoolio'],

    queryFn: async () => await getPortfolio(),

    retry: 1,

    staleTime: 600000,
  });
}
