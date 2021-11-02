import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'form-version/:id',
      element: <FormVersion />
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

const FormVersion = Loadable(lazy(() => import('../pages/Features/Customers/components/FormVersion')));
const FormVersion = Loadable(lazy(() => import('../pages/Features/Customers/components/FormVersion')));
