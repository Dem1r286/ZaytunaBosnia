import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

import global_en from './locales/en/global.json'
import global_ar from './locales/ar/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    ar: {
      global: global_ar
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
)
