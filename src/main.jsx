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
import Visualization from './components/pages/Big-Data/Visualization.jsx';
import DataAnalytics from './components/pages/Big-Data/DataAnalytics.jsx';
import MachineLearning from './components/pages/Big-Data/MachineLearning.jsx';
import CS from './components/pages/services-page/CyberSecurity.jsx';
import IAG from './components/pages/services-page/IAG.jsx';
import ICS from './components/pages/services-page/ICS.jsx';
import IT from './components/pages/services-page/IT-services.jsx';
import Support from './components/pages/services-page/IT-Support.jsx';
import Security from './components/pages/services-page/SecurityProducts.jsx';
import WSD from './components/pages/services-page/WSD.jsx';
import BPR from './components/pages/services-page/BPR.jsx';
import RBAM from './components/pages/RFID-solutions/RBAM.jsx';
import RSM from './components/pages/RFID-solutions/RSM.jsx';
import RFDM from './components/pages/RFID-solutions/RFDM.jsx';
import RAM from './components/pages/RFID-solutions/RAM.jsx';
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
      {
        path: "visualization",
        element: <Visualization />,
      
      },
      {
        path: "data-analytics",
        element: <DataAnalytics />,
      
      },
      {
        path: "bpr",
        element: <BPR />,
      
      },
      {
        path: "cyber-security",
        element: <CS />,
      
      },
      {
        path: "iag",
        element: <IAG />,
      
      },
      {
        path: "ics",
        element: <ICS />,
      
      },
      {
        path: "it-services",
        element: <IT />,
      
      },
      {
        path: "it-support",
        element: <Support />,
      
      },
      {
        path: "security-products",
        element: <Security />,
      
      },
      {
        path: "wsd",
        element: <WSD />,
      
      },
      {
        path: "machine-learning",
        element: <MachineLearning />,
      
      },
      {
        path: "rbam",
        element: <RBAM/>,
      
      },{
        path: "rsm",
        element: <RSM />,
      
      },{
        path: "rfdm",
        element: <RFDM />,
      
      },{
        path: "ram",
        element: <RAM />,
      
      },



    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
