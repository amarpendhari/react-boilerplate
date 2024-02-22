import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import { ToastContainer } from 'react-toastify';

import App from './App';

import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css';

import { defaultTheme } from "./styles/themes/default";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}> 
      <App />
      <ToastContainer hideProgressBar position='top-right' autoClose={3000} />
    </ThemeProvider>
  </React.StrictMode>
);
