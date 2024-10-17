import Login from '@/features/auth/components/Login';
import GuestOnlyRoute from '@/features/auth/guards/GuestOnlyRoute';

const LoginPage = () => {
  return (
    <GuestOnlyRoute>
      <Login />
    </GuestOnlyRoute>
  );
};

export default LoginPage;
