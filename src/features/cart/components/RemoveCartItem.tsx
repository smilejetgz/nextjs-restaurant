import { useRemoveCartItem } from '@/features/cart/hooks/api';
import { Button } from '@/features/shadcn/components/ui/button';
import { useToast } from '@/features/shadcn/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { Trash2 } from 'lucide-react';

const RemoveCartItem = ({ id }: { id: string }) => {
  const { mutateAsync } = useRemoveCartItem(id);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const RemoveProduct = async () => {
    try {
      await mutateAsync();
      toast({ description: 'Product removed from cart.' });
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to remove product from cart.';
      toast({ description: errorMessage });
    }
  };

  return (
    <Button className="rounded-full p-2" onClick={RemoveProduct} type="button">
      <Trash2 />
    </Button>
  );
};

export default RemoveCartItem;
