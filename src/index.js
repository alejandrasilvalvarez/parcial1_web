import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";
import localeEnMessages from "./locales/en.json";
import localeEsMessages from "./locales/es.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
const locale = navigator.language;

const messages = locale === "en" ? localeEnMessages : localeEsMessages;

root.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
