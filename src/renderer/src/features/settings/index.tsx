import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import { useTranslation } from 'react-i18next'

export default function SettingsPage() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-4 max-w-lg">
      <h2 className="text-3xl font-bold tracking-tight">{t('Settings.title')}</h2>
      <Tabs defaultValue="account" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">{t('Settings.account')}</TabsTrigger>
          <TabsTrigger value="password">{t('Settings.password')}</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>{t('Settings.account')}</CardTitle>
              <CardDescription>{t('Settings.account_desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">{t('Settings.labels.name')}</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">{t('Settings.labels.username')}</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>{t('Settings.buttons.save_changes')}</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>{t('Settings.password')}</CardTitle>
              <CardDescription>{t('Settings.password_desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">{t('Settings.labels.current_password')}</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">{t('Settings.labels.new_password')}</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>{t('Settings.buttons.save_password')}</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
