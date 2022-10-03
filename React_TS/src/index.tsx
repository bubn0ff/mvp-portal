import App from './App';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { setupStore } from './redux/store';

import './index.css';
import 'antd/dist/antd.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = setupStore();
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  // </React.StrictMode>,
);
reportWebVitals();
