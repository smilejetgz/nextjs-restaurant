import { type Profile, type Signin } from '@/features/auth/types';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  return useMutation({
    async mutationFn(input: Signin) {
      const res = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (!res.ok) {
        throw new Error('An error occurred');
      }

      return await (res.json() as Promise<Profile>);
    },
  });
};

export const useEditProfile = () => {
  return useMutation({
    async mutationFn(input: FormData) {
      const res = await fetch('/api/auth/profile', {
        method: 'PATCH',
        body: input,
      });

      const profile = await (res.json() as Promise<Profile>);

      return profile;
    },
  });
};
