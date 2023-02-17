const BikePagePath = '/bike-page/' as const;
const BikeUpdatePagePath = '/bike-update-page/' as const;

const routes = {
  HomePage: '/',
  BikePage: {
    routePath: `${BikePagePath}:id`,
    createLink: (id: string | number) => `${BikePagePath}${id}`,
  },
  BikeUpdatePage: {
    routePath: `${BikeUpdatePagePath}:id`,
    createLink: (id: string | number) => `${BikeUpdatePagePath}${id}`,
  },
  BikeCreatePage: '/bike-create-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
