import db from '@/features/shared/db';

export const findAll = async ({ page = 1, perPage = 10 }) => {
  try {
    const products = await db.product.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
      include: {
        category: true,
      },
    });

    const totalProducts = await db.product.count();

    return {
      pagination: {
        page,
        perPage,
        total: totalProducts,
        totalPages: Math.ceil(totalProducts / perPage),
      },
      data: products,
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export const findById = async (id: string) => {
  try {
    return await db.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export const findBySlug = async (slug: string) => {
  try {
    return await db.product.findUnique({
      where: { slug },
      include: {
        category: true,
      },
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
