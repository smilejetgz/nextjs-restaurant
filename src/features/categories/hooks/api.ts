import { type Categories } from '@/features/categories/types';
import { useQuery } from '@tanstack/react-query';

export const useGetCategories = ({
  page = 1,
  perPage = 10,
}: {
  page: number;
  perPage: number;
}) => {
  return useQuery({
    queryKey: ['categories', { page, perPage }],
    queryFn: async () => {
      const res = await fetch(
        `/api/categories?page=${page}&perPage=${perPage}`,
      );
      const categories = await (res.json() as Promise<Categories>);

      return categories;
    },
  });
};
