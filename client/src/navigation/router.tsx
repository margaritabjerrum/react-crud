import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import HomePage from 'pages/home-page/index';
import BikePage from 'pages/bike-page';
import BikeFormPage from 'pages/bike-form-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.BikePage.routePath,
        element: <BikePage />,
      },
      {
        path: routes.BikeCreatePage,
        element: <BikeFormPage mode="create" />,
      },
    ],
  },
]);

export default router;
