import { findAll } from '@/features/home/api';
import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const perPage = parseInt(searchParams.get('perPage') || '10', 10);
  const category: string | undefined = String(searchParams.get('category'));

  try {
    const data = await findAll({
      page,
      perPage,
      category,
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
