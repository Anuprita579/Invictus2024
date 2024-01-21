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
import ProfileForm1 from './Components/ProfileForm1';
import HireTalent from './Components/HireTalent';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import UpdateProfile from './Components/UpdateProfile';

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
        path: "/contactus",
        element: <ContactForm />
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
      {
        path: "/dashboard",
        element: <ProfileForm1/>
      },
      {
        path: "/hire",
        element: <HireTalent/>
      },
      {
        path: "/filter",
        element: <Filter/>
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile/>
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
