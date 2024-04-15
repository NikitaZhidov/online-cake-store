import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './pages/core-pages/MainPage';
import { CoreRoutes, MainRoutes } from './routes';
import AboutUsPage from './pages/service-pages/AboutUsPage';
import DeliveryPage from './pages/service-pages/DeliveryPage';
import NewsPage from './pages/service-pages/NewsPage';
import CatalogPage from './pages/core-pages/CatalogPage';
import PromotionsPage from './pages/core-pages/PromotionsPage';
import RecomendationsPage from './pages/core-pages/RecomendationsPage';
import ProfilePage from './pages/core-pages/ProfilePage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import globalStoreReducer from './store/global-store';
import CartPage from './pages/core-pages/CartPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
        children: [
          {
            path: '',
            element: <RecomendationsPage />,
          },
          {
            path: CoreRoutes.catalog,
            element: <CatalogPage />,
          },
          {
            path: CoreRoutes.promotions,
            element: <PromotionsPage />
          },
          {
            path: CoreRoutes.profile,
            element: <ProfilePage />,
          },
          {
            path: CoreRoutes.cart,
            element: <CartPage />,
          }
        ],
      },
      {
        path: MainRoutes.aboutUs,
        element: <AboutUsPage />
      },
      {
        path: MainRoutes.delivery,
        element: <DeliveryPage />
      },
      {
        path: MainRoutes.news,
        element: <NewsPage />
      },
    ]
  }
])

root.render(
  <Provider store={configureStore({
    reducer: {
      globalStore: globalStoreReducer,
    }
  })}>
    <RouterProvider router={router} />
  </Provider>
);
