import { useRoutes } from 'react-router'
import { routes } from '@generouted/react-router'
function AppRoutes() {
  const app = useRoutes(routes)
  return app
}
export default AppRoutes
