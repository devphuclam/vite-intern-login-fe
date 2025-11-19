/* eslint-disable @typescript-eslint/no-unused-vars */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// import './styles/global.css';
// import './styles/reset.css';
// import './styles/variable.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
