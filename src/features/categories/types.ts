import type * as api from '@/features/home/api';

export type CategoryPagination = Awaited<
  ReturnType<typeof api.findAll>
>['pagination'];
export type CategoryList = Awaited<
  ReturnType<typeof api.findAll>
>['data'][number];
export type Categories = Awaited<ReturnType<typeof api.findAll>>;
export type CategoryItem = NonNullable<
  Awaited<ReturnType<typeof api.findById>>
>;
export type CategorySlug = NonNullable<
  Awaited<ReturnType<typeof api.findBySlug>>
>;
