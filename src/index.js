import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from './context/AppContext';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <AppContextProvider>
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
    
  </AppContextProvider>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))sss
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
