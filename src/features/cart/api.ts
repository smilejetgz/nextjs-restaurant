import db from '@/features/shared/db';

export const findAll = async (userId: string) => {
  const cart = await db.cart.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  });

  return cart;
};

export const add = async (userId: string, productId: string) => {
  console.log('userId : ', userId);
  console.log('productId : ', productId);
  // check if the product is already in the cart
  const cart = await db.cart.upsert({
    where: {
      userId_productId: {
        userId,
        productId,
      },
    },
    update: { quantity: { increment: 1 } },
    create: {
      userId,
      productId,
      quantity: 1,
    },
  });

  return cart;
};
