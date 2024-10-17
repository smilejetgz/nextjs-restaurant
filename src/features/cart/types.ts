import type * as api from '@/features/cart/api';

export type CartItem = Awaited<ReturnType<typeof api.findAll>>[number];

export type AddCartItem = {
  productId: string;
};
