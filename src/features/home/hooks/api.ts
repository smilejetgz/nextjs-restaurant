import { type Products } from '@/features/home/types';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = ({
  page = 1,
  perPage = 20,
  category = undefined,
}: {
  page: number;
  perPage: number;
  category?: string;
}) => {
  return useQuery({
    queryKey: ['products', { page, perPage }],
    queryFn: async () => {
      const res = await fetch(
        `/api/products?page=${page}&perPage=${perPage}&category=${category}`,
      );
      const products = await (res.json() as Promise<Products>);

      return products;
    },
  });
};
