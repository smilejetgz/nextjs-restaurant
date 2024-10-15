import { Button } from '@/features/shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/features/shadcn/components/ui/card';
import Image from 'next/image';
import { type ProductList } from '@/features/home/types';

const Content = ({ products }: { products: ProductList[] }) => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10 xl:w-[90%] xl:grid-cols-5">
      {products.map((product) => (
        <Card key={product.id} className="flex h-full flex-col">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="relative h-40 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(min-width: 800px) 50vw, 100vw"
              />
            </div>
            <p className="pt-4">{product.category.name}</p>
            <CardDescription>{product.description}</CardDescription>
          </CardContent>
          <CardFooter className="mt-auto flex justify-between">
            <span>{product.price}</span>
            <Button>Add Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Content;
