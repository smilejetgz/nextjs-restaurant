'use client';
import { type FC } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/features/shadcn/components/ui/pagination';

import { Button } from '@/features/shadcn/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  pageCount: number;
}

interface PaginationArrowProps {
  direction: 'left' | 'right';
  href: string;
  isDisabled: boolean;
}

const PaginationArrow: FC<PaginationArrowProps> = ({
  direction,
  href,
  isDisabled,
}) => {
  const router = useRouter();
  const isLeft = direction === 'left';
  const disabledClassName = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <Button
      onClick={() => router.push(href)}
      className={` ${disabledClassName}`}
      aria-disabled={isDisabled}
      disabled={isDisabled}
    >
      {isLeft ? <ChevronLeft /> : <ChevronRight />}
    </Button>
  );
};

export function PaginationComponent({ pageCount }: Readonly<PaginationProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationArrow
            direction="left"
            href={createPageURL(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />
        </PaginationItem>
        <PaginationItem>
          <span className="px-5">Page {currentPage}</span>
        </PaginationItem>
        <PaginationItem>
          <PaginationArrow
            direction="right"
            href={createPageURL(currentPage + 1)}
            isDisabled={currentPage >= pageCount}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
