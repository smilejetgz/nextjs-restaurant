'use client';

import { Menu, Search, Package2 } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/features/shadcn/components/ui/sheet';
import { Button } from '@/features/shadcn/components/ui/button';
import { Input } from '@/features/shadcn/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/features/shadcn/components/ui/dropdown-menu';
import { ModeToggle } from '@/features/ui/components/ModeToggle';
import Cart from '@/features/cart/Cart';
import { useGetCategories } from '@/features/categories/hooks/api';
import { Loading, NotFound } from '@/features/ui/components/Status';
import AuthMenu from '@/features/auth/components/AuthMenu';
import ProtectedResource from '@/features/auth/guards/ProtectedResource';

const Header = () => {
  const { data, isLoading } = useGetCategories({ page: 1, perPage: 100 });

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="text-1xl flex items-center gap-2 text-nowrap font-semibold md:text-xl"
        >
          Name of business
        </Link>
        <Link
          href="/"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-muted-foreground transition-colors hover:text-foreground">
              Categories
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {isLoading ? (
              <DropdownMenuItem className="cursor-wait">
                <Loading label="loading.." />
              </DropdownMenuItem>
            ) : !data ? (
              <DropdownMenuItem className="cursor-not-allowed">
                <NotFound label="No categories found" />
              </DropdownMenuItem>
            ) : (
              data.data.map((category) => (
                <DropdownMenuItem
                  className="cursor-pointer"
                  asChild
                  key={category.id}
                >
                  <Link href={`/${category.slug}`}>{category.name}</Link>
                </DropdownMenuItem>
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/home"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="/home"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-left font-medium text-muted-foreground hover:text-foreground">
                  Categories
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isLoading ? (
                  <DropdownMenuItem className="cursor-wait">
                    <Loading label="loading.." />
                  </DropdownMenuItem>
                ) : !data ? (
                  <DropdownMenuItem className="cursor-not-allowed">
                    <NotFound label="No categories found" />
                  </DropdownMenuItem>
                ) : (
                  data.data.map((category) => (
                    <Link
                      href={`/?page=1&category=${category.slug}`}
                      key={category.id}
                    >
                      <DropdownMenuItem className="cursor-pointer">
                        {category.name}
                      </DropdownMenuItem>
                    </Link>
                  ))
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <ProtectedResource roles={['ADMIN', 'USER']} label={null}>
          <Cart />
        </ProtectedResource>
        <ModeToggle />
        <AuthMenu />
      </div>
    </header>
  );
};

export default Header;
