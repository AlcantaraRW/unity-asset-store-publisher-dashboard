import React from 'react';

import DrawerRoutes from './Drawer';
import SignInStackRoutes from './SignInStack';
import { useAuth } from '../hooks/auth';

const DefaultRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? <DrawerRoutes /> : <SignInStackRoutes />;
};

export default DefaultRoutes;
