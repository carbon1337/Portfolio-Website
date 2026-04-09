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
import WhileTheySleep from './Pages/WhileTheySleep.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import SevenDeadlySpins from './Pages/SevenDeadlySpins.jsx';

const theme = createTheme({
  palette: {
    background: {
      main: "#121116",
      alt: "#121116",
    },
    primary: {
      main: '#bcbcbc',
    },
    secondary: {
      main: '#201f2b',
    },
    accent: {
      main: '#6B5A49',
      pink: '#AA6C6D',
    },
    text: {
      main: '#D6D9DA',
      alt: '#8E8E8E',
      link: '#f9c425',
    },
  },
  typography: {
    fontFamily: [
      "Google Sans Code", 
      "sans-serif"
    ].join(", "),
    h3: {
      fontFamily: [
        "Google Sans Code", 
        "sans-serif",
      ].join(", "),
    },
    h4: {
      fontFamily: [
        "Google Sans Code", 
        "sans-serif",
      ].join(", "),
    },
    h5: {
      fontFamily: [
        "Google Sans Code", 
        "sans-serif",
      ].join(", "),
    },
    h7: {
      fontFamily: [
        "Google Sans Code", 
        "sans-serif",
      ].join(", "),
    },
    button: {
      fontFamily: [
        "Google Sans Code", 
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
    path: "/WhileTheySleep",
    element: <WhileTheySleep />,
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
  {
    path: "/SevenDeadlySpins",
    element: <SevenDeadlySpins />,
  },
  {
    path: "/AboutMe",
    element: <AboutMe />,
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
