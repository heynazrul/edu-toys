import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'login',
        element: <LogIn></LogIn>
      },
      {
        path:'register',
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
