import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './routes/ErrorPage.jsx';
import './index.css'
import Root from './routes/root.jsx';
import Services from './components/pages/services-page/Services.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/pages/about-us/About.jsx';
import BigData from './components/pages/Big-Data/BigData.jsx';
import ContactUs from './components/pages/Contact-Us/ContactUs.jsx';
import Home from './components/pages/home-page/Home.jsx';
import Communications from './components/pages/Communications-Media/Communications.jsx';
import RFID from './components/pages/RFID-solutions/RFID.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "big-data",
        element: <BigData />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "communications-and-media",
        element: <Communications />,
      },
      {
        path: "RFID-solutions",
        element: <RFID />,
      },

    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
