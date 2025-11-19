import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login/Login';
import { ROUTES } from '../constants/route';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
]);
