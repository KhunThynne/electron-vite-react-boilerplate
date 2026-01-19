import { AppHeader } from '@components/AppHeader'
import { AppSidebar } from '@components/AppSidebar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AppSidebar />

      <div className="flex flex-col">
        <AppHeader />
        <main className="p-4 lg:p-6  @container size-full">
          <Outlet />
        </main>
      </div>
    </div>
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
