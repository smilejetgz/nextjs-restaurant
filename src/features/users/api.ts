import { type ProfileForm, type Signup } from '@/features/auth/types';
import bcrypt from 'bcryptjs';
import db from '@/features/shared/db';
import { removeDirFromFile, saveFile } from '@/features/shared/helpers/file';

export const findAll = async () => {
  const user = await db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return user;
};

export const findById = async (id: string) => {
  const user = await db.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
    },
  });

  if (!user) throw new Error('user not found');
  return user;
};

export const checkUserEmailExists = async ({
  email,
  userId,
}: Pick<Signup, 'email'> & { userId?: string }): Promise<boolean> => {
  const userWithEmail = await db.user.findUnique({
    where: { email, ...(userId && { NOT: { id: userId } }) },
  });

  return !!userWithEmail;
};

export const add = async (input: Signup) => {
  const password = await hashPassword(input.password);
  const user = await db.user.create({
    data: {
      ...input,
      password,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
    },
  });

  return user;
};

export const update = async (userId: string, input: ProfileForm) => {
  let { image } = await findById(userId);

  if (input.image) {
    const currentImage = image;
    image = await saveFile(input.image);
    if (currentImage) await removeDirFromFile(currentImage);
  }

  const user = await db.user.update({
    where: { id: userId },
    data: {
      ...input,
      image,
      password: input.password ? await hashPassword(input.password) : undefined,
    },
  });

  return user;
};

const hashPassword = (password: string) => {
  return bcrypt.hash(password, 12);
};
