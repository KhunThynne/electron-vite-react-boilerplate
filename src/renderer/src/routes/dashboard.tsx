import { createFileRoute } from '@tanstack/react-router'
import { Users, DollarSign, Activity, CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard
})

function Dashboard() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1% from last month',
      icon: DollarSign
    },
    {
      title: 'Subscriptions',
      value: '+2350',
      change: '+180.1% from last month',
      icon: Users
    },
    {
      title: 'Sales',
      value: '+12,234',
      change: '+19% from last month',
      icon: CreditCard
    },
    {
      title: 'Active Now',
      value: '+573',
      change: '+201 since last hour',
      icon: Activity
    }
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} x-chunk={`dashboard-01-chunk-${index}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Transactions</CardTitle>
              <p className="text-sm text-muted-foreground">Recent transactions from your store.</p>
            </div>
          </CardHeader>
          <CardContent>
            {/* Table can be added here later */}
            <div className="h-[200px] w-full rounded-md bg-muted/20 flex items-center justify-center text-muted-foreground">
              Transaction History Placeholder
            </div>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Olivia Martin</p>
                <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
              </div>
              <div className="ml-auto font-medium">+$1,999.00</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Jackson Lee</p>
                <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
              </div>
              <div className="ml-auto font-medium">+$39.00</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
