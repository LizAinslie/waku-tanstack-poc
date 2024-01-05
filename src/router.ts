import { Router } from '@tanstack/react-router';
import { rootRoute } from './routes/root.js';
import { indexRoute } from './routes/index.js';
import { aboutRoute } from './routes/about.js';

export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
]);

export function createRouter() {
  return new Router({ routeTree });
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
