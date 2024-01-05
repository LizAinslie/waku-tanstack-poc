import { Route } from '@tanstack/react-router';

import { rootRoute } from './root.js';

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => (
    <>
      <h1>About</h1>
    </>
  )
})