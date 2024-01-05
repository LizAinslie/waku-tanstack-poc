import { Route } from '@tanstack/react-router';

import { rootRoute } from './root.js';

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <>
      <h1>Home</h1>
    </>
  )
})