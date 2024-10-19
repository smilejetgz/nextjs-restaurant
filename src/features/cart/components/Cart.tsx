import RemoveCartItem from '@/features/cart/components/RemoveCartItem';
import { useGetCart } from '@/features/cart/hooks/api';
import { Button } from '@/features/shadcn/components/ui/button';
// import { Input } from '@/features/shadcn/components/ui/input';
import { ScrollArea } from '@/features/shadcn/components/ui/scroll-area';
import { Separator } from '@/features/shadcn/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/features/shadcn/components/ui/sheet';
import { Loading } from '@/features/ui/components/Status';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const Cart = () => {
  const { data, isLoading } = useGetCart();
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">Cart</span>
          </Button>
          <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
            {data?.length}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col p-4">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Review your items</SheetDescription>
        </SheetHeader>

        <ScrollArea className="border border-stone-800 p-4">
          <div className="flex flex-grow flex-col gap-4">
            {isLoading ? (
              <Loading label="loading..." />
            ) : !data ? (
              <></>
            ) : (
              data.map((item) => (
                <div className="border-b border-stone-800 pb-2" key={item.id}>
                  <div className="flex gap-4">
                    <div className="relative h-16 w-16">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        layout="fill"
                      />
                    </div>
                    <div className="flex flex-grow flex-col">
                      <p>{item.product.name}</p>
                      <p className="text-sm">Amount : {item.quantity}</p>
                      <p className="text-sm text-green-500">
                        Price : {item.product.price.toFixed(2)}
                      </p>
                    </div>
                    <RemoveCartItem id={item.product.id} />
                  </div>
                  <p className="text-right text-sm text-yellow-500">
                    Total : {(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>
        </ScrollArea>

        <p className="text-right text-sm">
          Total:{' '}
          {data
            ? data
                .map((item) => item.product.price * item.quantity)
                .reduce((a: number, b: number) => a + b, 0)
                .toFixed(2)
            : '0.00'}
        </p>
        <Separator />
        <Button className="mt-auto rounded px-4 py-2">Buy</Button>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
