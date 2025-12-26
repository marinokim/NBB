import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import LayoutV2 from './components/Layout/LayoutV2';
import HomeV2 from './pages/HomeV2';
import BusinessV2 from './pages/BusinessV2';
import AboutV2 from './pages/AboutV2';
import NetworkV2 from './pages/NetworkV2';
import ContactV2 from './pages/ContactV2';
import SteelProductsV2 from './pages/SteelProductsV2';
import KProductsV2 from './pages/KProductsV2';

const router = createHashRouter([
  {
    path: "/",
    element: <LayoutV2 />,
    children: [
      {
        index: true,
        element: <HomeV2 />,
      },
      {
        path: "business",
        element: <BusinessV2 />,
      },
      {
        path: "business/steel",
        element: <SteelProductsV2 />,
      },
      {
        path: "business/k-product",
        element: <KProductsV2 />,
      },
      {
        path: "about",
        element: <AboutV2 />,
      },
      {
        path: "network",
        element: <NetworkV2 />,
      },
      {
        path: "contact",
        element: <ContactV2 />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
