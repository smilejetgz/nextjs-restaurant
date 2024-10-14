import { findById, findBySlug } from '@/features/home/api';
import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const slug = searchParams.get('slug');

  if (id) {
    try {
      const product = await findById(id);
      return NextResponse.json(product, { status: 200 });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred.';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  }

  if (slug) {
    try {
      const product = await findBySlug(slug);
      return NextResponse.json(product, { status: 200 });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred.';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  }

  return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
};
