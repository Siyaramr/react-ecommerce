import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import HomePage from './pages/home/home.pages';
import "./assets/global.css";
import "flowbite"; // flowbite js
import RoutingConfig from './config/routing,config';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutingConfig/>
  </StrictMode>,
)
