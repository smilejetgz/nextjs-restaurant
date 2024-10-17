import { useAddCartItem } from '@/features/cart/hooks/api';
import { Button } from '@/features/shadcn/components/ui/button';
import { useToast } from '@/features/shadcn/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const AddCartItem = ({ productId }: { productId: string }) => {
  const router = useRouter();
  const { status } = useSession();
  const { mutateAsync } = useAddCartItem(productId);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const AddProduct = async () => {
    try {
      if (status === 'unauthenticated') {
        toast({ description: 'Please login before' });
        router.replace('/auth/login');
        return;
      }
      await mutateAsync();
      toast({ description: 'Cart updated successfully.' });
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to update cart.';
      toast({ description: errorMessage });
    }
  };

  return (
    <Button onClick={AddProduct} type="button">
      Add to Cart
    </Button>
  );
};

export default AddCartItem;
