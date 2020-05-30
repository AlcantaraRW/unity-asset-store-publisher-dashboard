import React from 'react';

import DrawerRoutes from './Drawer';
import SignInStackRoutes from './SignInStack';
import { useAuth } from '../hooks/auth';

const DefaultRoutes: React.FC = () => {
  const { isAuthenticated, isLoadingAuthData } = useAuth();

  return isLoadingAuthData ? null : isAuthenticated() ? (
    <DrawerRoutes />
  ) : (
    <SignInStackRoutes />
  );
};

export default DefaultRoutes;
