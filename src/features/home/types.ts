import type * as api from '@/features/home/api';

export type ProductPagination = Awaited<
  ReturnType<typeof api.findAll>
>['pagination'];
export type ProductList = Awaited<
  ReturnType<typeof api.findAll>
>['data'][number];
export type Products = Awaited<ReturnType<typeof api.findAll>>;
export type ProductItem = NonNullable<Awaited<ReturnType<typeof api.findById>>>;
export type ProductSlug = NonNullable<
  Awaited<ReturnType<typeof api.findBySlug>>
>;
