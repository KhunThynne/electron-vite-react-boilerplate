import './assets/main.css'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { HashRouter } from 'react-router'
import AppRoutes from './AppRoutes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </StrictMode>
)
