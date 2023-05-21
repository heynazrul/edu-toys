import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';
import AddToy from '../pages/AddToy/AddToy';
import PrivateRoute from './PrivateRoute';
import SingleToy from '../pages/SingleToy/SingleToy';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';

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
        path: 'login',
        element: <LogIn></LogIn>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: '/all-toys',
        element: <AllToys></AllToys>,
        loader: () => fetch('https://edu-toys-server-seven.vercel.app/totalToys'),
      },
      {
        path: '/user/add-toy',
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: '/user/my-toys',
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: '/toy/:id',
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://edu-toys-server-seven.vercel.app/toy/${params.id}`),
      },
    ],
  },
]);

export default router;
