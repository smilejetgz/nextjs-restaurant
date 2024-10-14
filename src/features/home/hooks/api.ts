import { type Products } from '@/features/home/types';
import { useQuery } from '@tanstack/react-query';

// page and perPage are optional
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
      const res = await fetch(`/api/products?page=${page}`);
      const products = await (res.json() as Promise<Products>);

      return products;
    },
  });
};
