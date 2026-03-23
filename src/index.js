import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider, createBrowserRouter,
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Homepage from './Pages/Homepage.jsx';
import Movemint from './Pages/Movemint.jsx';
import DragonThief from './Pages/DragonThief.jsx';
import TakinSouls from './Pages/TakinSouls.jsx';
import BuffBee from './Pages/BuffBee.jsx';
import HuntOfTheUndead from './Pages/HuntOfTheUndead.jsx';

const theme = createTheme({
  palette: {
    background: {
      main: "#161618",
      alt: "#1A1A1B",
    },
    primary: {
      main: '#822CE4',
    },
    secondary: {
      main: '#370270',
    },
    accent: {
      main: '#6B5A49',
      pink: '#AA6C6D',
    },
    text: {
      main: '#D6D9DA',
      alt: '#8E8E8E',
    },
  },
  typography: {
    fontFamily: [
      "Sora", 
      "sans-serif"
    ].join(", "),
    h3: {
      fontFamily: [
        "Archivo Black", 
        "sans-serif",
      ].join(", "),
    },
    h4: {
      fontFamily: [
        "Sora", 
        "sans-serif",
      ].join(", "),
    },
    button: {
      fontFamily: [
        "Sora", 
        "sans-serif",
      ].join(", "),
    },
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/Movemint",
    element: <Movemint />,
  },
  {
    path: "/DragonThief",
    element: <DragonThief />,
  },
  {
    path: "/TakinSouls",
    element: <TakinSouls />,
  },
  {
    path: "/BuffBee",
    element: <BuffBee />,
  },
  {
    path: "/HuntOfTheUndead",
    element: <HuntOfTheUndead />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
  </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
