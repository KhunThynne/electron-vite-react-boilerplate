'use client'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@components/ui/sonner'
import { Outlet, Scripts } from 'react-router'

export default function Provider({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      {children}
      {/* <Outlet /> */}
      <Scripts />
    </ThemeProvider>
  )
}
