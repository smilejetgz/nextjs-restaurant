import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const image = z
  .custom<File | null>((image) => image instanceof File, 'Image is required')
  .refine(
    (image) => image && image.size <= MAX_FILE_SIZE,
    'Max file size is 5MB',
  )
  .refine(
    (image) => image && ACCEPTED_IMAGE_TYPES.includes(image.type),
    'Invalid file type',
  );
