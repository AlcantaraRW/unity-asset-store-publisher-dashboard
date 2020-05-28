import React from 'react';

import DrawerRoutes from './Drawer';
import SignInStackRoutes from './SignInStack';

const isSigned = false;

const DefaultRoutes: React.FC = () => {
  return isSigned ? <DrawerRoutes /> : <SignInStackRoutes />;
};

export default DefaultRoutes;
