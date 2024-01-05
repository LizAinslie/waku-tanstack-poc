import { useContext } from 'react';
import { type AnyRouter, RouterProvider, useRouter } from '@tanstack/react-router';
import { Context } from '@tanstack/react-cross-context';

export function StartClient(props: { router: AnyRouter }) {
  return <RouterProvider router={props.router} />
}

export function DehydrateRouter() {
  const router = useRouter()

  const dehydratedCtx = useContext(
    Context.get('TanStackRouterHydrationContext', {}),
  )

  const dehydrated = router.dehydratedData || dehydratedCtx

  return (
    <script
      id="__TSR_DEHYDRATED__"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
          window.__TSR_DEHYDRATED__ = ${JSON.stringify(dehydrated)}
        `,
      }}
    />
  )
}