import './assets/main.css'
import './shared/libs/i18n'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Provider from './provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Provider>
        <AppRoutes />
      </Provider>
    </HashRouter>
  </StrictMode>
)
