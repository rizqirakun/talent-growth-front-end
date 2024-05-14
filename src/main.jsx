import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from '@utils/i18n';
import { HelmetProvider } from 'react-helmet-async';
import { CookiesProvider } from 'react-cookie';

const helmetContext = {};
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </CookiesProvider>
    </I18nextProvider>
  </React.StrictMode>
);
