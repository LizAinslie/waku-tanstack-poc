import {Link, Outlet, RootRoute} from '@tanstack/react-router'

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <header>
        <Link to="/">Home</Link>{ ' ' }
        <Link to="/about">About</Link>
      </header>
      <Outlet/>
    </>
  ),
});