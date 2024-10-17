import db from '@/features/shared/db';

interface FindAllParams {
  page: number;
  perPage: number;
  category?: string;
}

export const findAll = async ({ page, perPage, category }: FindAllParams) => {
  try {
    const where =
      category !== 'undefined' ? { category: { slug: category } } : {};
    const [products, totalProducts] = await Promise.all([
      db.product.findMany({
        take: perPage,
        skip: (page - 1) * perPage,
        include: {
          category: true,
        },
        where,
      }),
      db.product.count({
        where,
      }),
    ]);

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
