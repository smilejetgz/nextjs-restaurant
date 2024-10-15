import { type Products } from '@/features/home/types';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = ({
  page = 1,
  perPage = 20,
}: {
  page: number;
  perPage: number;
}) => {
  return useQuery({
    queryKey: ['products', { page, perPage }],
    queryFn: async () => {
      const res = await fetch(`/api/products?page=${page}&perPage=${perPage}`);
      const products = await (res.json() as Promise<Products>);

      return products;
    },
  });
};
