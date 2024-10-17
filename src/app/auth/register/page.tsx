import Register from '@/features/auth/components/Register';
import GuestOnlyRoute from '@/features/auth/guards/GuestOnlyRoute';

const LoginPage = () => {
  return (
    <GuestOnlyRoute>
      <Register />
    </GuestOnlyRoute>
  );
};

export default LoginPage;
