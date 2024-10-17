import { type CartItem, type AddCartItem } from '@/features/cart/types';
import { useQuery, useMutation } from '@tanstack/react-query';

export const useGetCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await fetch('/api/cart');
      const cart = await (res.json() as Promise<CartItem[]>);

      return cart;
    },
  });
};

export const useAddCartItem = (productId: string) => {
  return useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId } as AddCartItem),
      });
      const cart = await (res.json() as Promise<CartItem[]>);

      return cart;
    },
  });
};
