import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import './Fonts/Cascadia.ttf';

const theme=extendTheme({
  colors: {
    background: "#1B2430",
    heading: "#F5F7F8",
    subHeading: "#5EDFFF",
    body:"#F5F7F8",
    code:"#61677A",
    sidebar: "linear-gradient(351deg, rgba(27,36,48,1) 0%, rgba(27,36,48,1) 37%, rgba(27,36,48,1) 100%)"
  },

  fonts: {
     mainFont:"'Cascadia Code', monospace"
  },

  fontSizes: {
     xl: "3rem",
     l:"2rem",
     m:"1.5rem"
  },

  letterSpacings:{
    normal: "0.1em",
    wide:"0.2em",
  },

  lineHeights: {
    tall: '1.5',
    taller: '1.8'
  },

  shadows: {
    // -webkit-box-shadow: 10px 16px 26px 11px rgba(243,248,255,0.7);
    // -moz-box-shadow: 10px 16px 26px 11px rgba(243,248,255,0.7);
    custom: '6px 4px 26px -4px rgba(243,248,255,0.7)'
  },

  breakpoints : {
    base: "0em", // 0px
    sm: "30em", // ~480px.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  },


});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
