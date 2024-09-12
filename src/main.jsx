import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppContext from './Context/Context.jsx'
import App from './App.jsx'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </StrictMode>
)
