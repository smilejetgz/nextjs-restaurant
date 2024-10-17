'use client';

import Content from '@/features/home/components/Content';
import { useGetProducts } from '@/features/home/hooks/api';
import { Loading, NotFound } from '@/features/ui/components/Status';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { PaginationComponent } from '@/features/ui/components/PaginationLink';

const HomePage = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') ?? '1');
  const category = searchParams.get('category') ?? undefined;
  const pageSize = 10;
  const { data, isLoading } = useGetProducts({
    page,
    perPage: pageSize,
    category,
  });

  return (
    <>
      {isLoading ? (
        <Loading label="loading..." />
      ) : !data ? (
        <NotFound label="No products found" />
      ) : (
        <>
          <Content products={data.data} />
          {data.pagination && (
            <PaginationComponent pageCount={data.pagination.totalPages} />
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
