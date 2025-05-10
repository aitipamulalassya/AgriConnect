import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';  // ✅ Import store and persistor
import { AuthProvider } from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* ✅ Wrap in Provider */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <AuthProvider> <App /></AuthProvider>
         
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
