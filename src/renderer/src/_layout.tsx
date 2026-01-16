import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="absolute inset-0">
      <div className="border h-full place-content-center place-items-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-gray-950" />
        <Outlet />
      </div>
    </div>
  )
}
