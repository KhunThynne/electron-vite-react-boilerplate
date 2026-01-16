import './assets/main.css'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
