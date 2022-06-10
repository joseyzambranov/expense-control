import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {persistor, store} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from "react-dom/client";


//------------old script--------------------------------------

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );*/

//------------------new react 18-----------------------------------
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//ReactDOM.render(
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <App />

    </PersistGate>

  </Provider>,
  //document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
