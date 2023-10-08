import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import Details from './components/Details/Details';
import OurTeam from './components/OurTeam/OurTeam';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import SignUp from './components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader:() => fetch('../entertainment.json')
      },
      {
        path: "/ourTeam",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/reviews",
        element: <CustomerReviews></CustomerReviews>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
