import './assets/main.css'
import './shared/libs/i18n'
import { StrictMode } from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import Provider from './provider'
import { routeTree } from './routeTree.gen'
import ReactDOM from 'react-dom/client'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  )
}
