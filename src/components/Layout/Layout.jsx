import { Navigation } from 'components/Navigation/Navigation';

import { Outlet, useParams } from 'react-router-dom';

export const Layout = () => {
  const { id } = useParams();
  return (
    <>
      <header>{!id && <Navigation />}</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
