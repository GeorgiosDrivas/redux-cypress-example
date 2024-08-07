import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './index.css'
import store from './store';
import { Provider } from 'react-redux';

const container = document.getElementById("root");

if(container){
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root element not found");
}