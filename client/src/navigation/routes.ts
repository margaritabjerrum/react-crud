const BikePagePath = '/bike-page/' as const;

const routes = {
  HomePage: '/',
  BikePage: {
    routePath: `${BikePagePath}:id`,
    createLink: (id: string | number) => `${BikePagePath}${id}`,
  },
  BikeCreatePage: '/bike-create-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
