import React from 'react';

import DrawerRoutes from './Drawer';
import SignInStackRoutes from './SignInStack';
import { useAuth } from '../hooks/auth';

const DefaultRoutes: React.FC = () => {
  const { isAuthenticated, isLoadingAuthData } = useAuth();

  if (isLoadingAuthData) return null;

  return isAuthenticated() ? <DrawerRoutes /> : <SignInStackRoutes />;
};

export default DefaultRoutes;
