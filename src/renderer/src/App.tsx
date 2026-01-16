import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import { FileCode, Globe, Send } from 'lucide-react'
import electronLogo from './assets/electron.svg'
import Versions from '@components/Versions'
import clsx from 'clsx'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">
      <Card className={clsx(`w-full max-w-md shadow-lg transition-all hover:shadow-xl`)}>
        <CardHeader className="flex flex-col items-center gap-4 pb-2">
          <Avatar className="h-24 w-24 border-4 border-white shadow-sm dark:border-gray-800">
            <AvatarImage src={electronLogo} alt="Electron Logo" className="object-contain p-2" />
            <AvatarFallback>EL</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <CardTitle className="text-3xl font-extrabold tracking-tight">Electron Vite</CardTitle>
            <CardDescription className="mt-2 text-base">
              Powered by electron-vite, React & TypeScript
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6 py-6 text-center">
          <div className="text-sm text-muted-foreground">
            Build an Electron app with <span className="font-semibold text-primary">React</span>
            {' & '}
            <span className="font-semibold text-primary">TypeScript</span>
          </div>
          <div className="rounded-lg border bg-muted/50 p-4">
            <p className="flex items-center justify-center gap-2 text-sm font-medium">
              <FileCode className="h-4 w-4" />
              Press{' '}
              <span className="rounded border bg-background px-1.5 py-0.5 font-mono text-xs font-bold text-foreground">
                F12
              </span>{' '}
              to open devTools
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pt-2">
          <div className="grid w-full grid-cols-2 gap-4">
            <Button variant="outline" className="w-full gap-2" asChild>
              <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
                <Globe className="h-4 w-4" />
                Documentation
              </a>
            </Button>
            <Button className="w-full gap-2" onClick={ipcHandle}>
              <Send className="h-4 w-4" />
              Send IPC
            </Button>
          </div>

          <div className="mt-4 flex w-full justify-center text-xs text-muted-foreground">
            <Versions />
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
