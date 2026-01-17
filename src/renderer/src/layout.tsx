import { Outlet } from 'react-router'
import { AppSidebar } from '@renderer/shared/components/AppSidebar'
import { AppHeader } from '@renderer/shared/components/AppHeader'

export default function Layout() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AppSidebar />

      <div className="flex flex-col">
        <AppHeader />
        <main className="p-4 lg:p-6  @container size-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
