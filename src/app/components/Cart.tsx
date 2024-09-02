import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full p-4">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Review your items</SheetDescription>
        </SheetHeader>

        <Separator />
        <ScrollArea className="rounded-md border p-4">
          <div className="flex flex-col gap-4 flex-grow">
            <div className="flex items-center justify-between">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="border-solid border-2 rounded-full"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 1</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 text-center border-solid border-2 rounded-full"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex text-sm items-center justify-end">
              <p>Price: ฿10.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="border-solid border-2 rounded-full"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 2</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 text-center border-solid border-2 rounded-full"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex text-sm items-center justify-end">
              <p>Price: ฿10.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="border-solid border-2 rounded-full"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 3</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 text-center border-solid border-2 rounded-full"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex text-sm items-center justify-end">
              <p>Price: ฿10.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="border-solid border-2 rounded-full"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 4</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 text-center border-solid border-2 rounded-full"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex text-sm items-center justify-end">
              <p>Price: ฿10.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="border-solid border-2 rounded-full"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 5</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 text-center border-solid border-2 rounded-full"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex text-sm items-center justify-end">
              <p>Price: ฿10.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/photo.png"
                  alt="product"
                  fill
                  className="border-solid border-2 rounded-full"
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </div>
              <span>Product 6</span>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 text-center border-solid border-2 rounded-full"
              />
              <Trash2 className="cursor-pointer" />
            </div>
            <div className="flex text-sm items-center justify-end">
              <p>Price: ฿10.00</p>
            </div>
          </div>
        </ScrollArea>

        <p className="text-right text-sm">Total: ฿1520.00</p>
        <Separator />
        <Button className="mt-auto py-2 px-4 rounded">Buy</Button>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
