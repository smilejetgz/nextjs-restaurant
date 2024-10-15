import * as z from 'zod';
import { image } from '@/features/shared/validators/image';

export const signin = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signup = signin.extend({
  name: z.string().min(3),
  telephone: z.string().min(10),
});

export const profile = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.preprocess(
    (data) => (data === '' ? undefined : data),
    z.string().min(8).optional(),
  ),
  image: image.optional(),
});
