import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Home from "./Components/Home";
import Search from './Components/Search';
import Error from './Components/Error';
import MachineLearning from './Components/MachineLearning';
import ArtificialIntelligence from './Components/ArtificialIntelligence'
import WebDevelopment from './Components/WebDevelopment';
import UIUXDevelopment from './Components/UIUXDevelopment';
import DatabaseManager from './Components/DatabaseManager';
import Registration from './Components/Registration';
import OtpLogin from './Components/Login/OtpLogin';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/searchFor/machine-learning",
        element: <MachineLearning />
      },
      {
        path: "/searchFor/artificial-intelligence",
        element: <ArtificialIntelligence />
      },
      {
        path: "/searchFor/web-development",
        element: <WebDevelopment />
      },
      {
        path: "/searchFor/uiux-development",
        element: <UIUXDevelopment />
      },
      {
        path: "/searchFor/database-manager",
        element: <DatabaseManager />
      },
      {
        path: "/login",
        element: <Registration />
      },
      {
        path: "/otp",
        element: <OtpLogin />
      },
      

    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
