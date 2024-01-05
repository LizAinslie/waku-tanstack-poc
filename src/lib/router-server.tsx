import { AnyRouter, RouterProvider } from '@tanstack/react-router';
import { Context } from '@tanstack/react-cross-context';
import { useMemo } from 'react';

export function StartServer<TRouter extends AnyRouter>(props: {
  router: TRouter
}) {
  const hydrationContext = Context.get('TanStackRouterHydrationContext', {})

  const hydrationCtxValue = useMemo(
    () => ({
      router: props.router.dehydrate(),
      payload: props.router.options.dehydrate?.(),
    }),
    [],
  )

  return (
    // Provide the hydration context still, since `<DehydrateRouter />` needs it.
    <hydrationContext.Provider value={hydrationCtxValue}>
      <RouterProvider router={props.router} />
    </hydrationContext.Provider>
  )
}
