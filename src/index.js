/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/inter"; // Defaults to weight 400
// import "@fontsource/inter/400.css"; // Specify weight
// import "@fontsource/inter/400-italic.css"; 
import reportWebVitals from './reportWebVitals';
import { store } from './store/Store';
import App from './App';
import '@fontsource/poppins';
import './data';
import "./index.css"
// // Change this:
// import 'react-datepicker/dist/react-datepicker.css';

// // To this:
// import 'react-datepicker/dist/react-datepicker.css';
// // OR if that doesn't work, try:
// import 'react-datepicker/src/stylesheets/datepicker.scss';
// // OR for the minified version:
// import 'react-datepicker/dist/react-datepicker.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
