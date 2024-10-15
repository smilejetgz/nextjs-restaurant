import db from '@/features/shared/db';

export const findAll = async ({ page = 1, perPage = 10 }) => {
  try {
    const categories = await db.category.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
    });

    const totalCategories = await db.category.count();

    return {
      pagination: {
        page,
        perPage,
        total: totalCategories,
        totalPages: Math.ceil(totalCategories / perPage),
      },
      data: categories,
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export const findById = async (id: string) => {
  try {
    return await db.category.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error('Error fetching category:', error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export const findBySlug = async (slug: string) => {
  try {
    return await db.category.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error('Error fetching category:', error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
