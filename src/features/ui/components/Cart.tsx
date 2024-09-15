import { Button } from '@/features/shadcn/components/ui/button';
import { Input } from '@/features/shadcn/components/ui/input';
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
import { ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col p-4">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Review your items</SheetDescription>
        </SheetHeader>

        <Separator />
        <ScrollArea className="rounded-md border p-4">
          <div className="flex flex-grow flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="relative h-20 w-20">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="rounded-full border-2 border-solid"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 1</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 rounded-full border-2 border-solid text-center"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex items-center justify-end text-sm">
              <p>Price: ฿10.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="relative h-20 w-20">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="rounded-full border-2 border-solid"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 2</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 rounded-full border-2 border-solid text-center"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex items-center justify-end text-sm">
              <p>Price: ฿10.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="relative h-20 w-20">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="rounded-full border-2 border-solid"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 3</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 rounded-full border-2 border-solid text-center"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex items-center justify-end text-sm">
              <p>Price: ฿10.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="relative h-20 w-20">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="rounded-full border-2 border-solid"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 4</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 rounded-full border-2 border-solid text-center"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex items-center justify-end text-sm">
              <p>Price: ฿10.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="relative h-20 w-20">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="rounded-full border-2 border-solid"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 5</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 rounded-full border-2 border-solid text-center"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex items-center justify-end text-sm">
              <p>Price: ฿10.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="relative h-20 w-20">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="rounded-full border-2 border-solid"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 6</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 rounded-full border-2 border-solid text-center"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex items-center justify-end text-sm">
              <p>Price: ฿10.00</p>
            </div>
          </div>
        </ScrollArea>

        <p className="text-right text-sm">Total: ฿1520.00</p>
        <Separator />
        <Button className="mt-auto rounded px-4 py-2">Buy</Button>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
