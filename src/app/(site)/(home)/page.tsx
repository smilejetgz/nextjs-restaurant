'use client';

import Content from '@/features/home/components/Content';
import { useGetProducts } from '@/features/home/hooks/api';
import { Loading, NotFound } from '@/features/ui/components/Status';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { PaginationWithLinks } from '@/features/ui/components/PaginationWithLinks';

const HomePage = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') ?? '1');
  const pageSize = 10;
  const { data, isLoading } = useGetProducts({ page, perPage: pageSize });

  return (
    <>
      {isLoading ? (
        <Loading label="loading..." />
      ) : !data ? (
        <NotFound label="No products found" />
      ) : (
        <>
          <Content products={data.data} />
          <PaginationWithLinks
            page={page}
            pageSize={pageSize}
            totalCount={data.pagination.total}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
