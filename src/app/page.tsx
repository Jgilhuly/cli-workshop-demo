'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useLocalizedStrings } from '@/contexts/LocaleContext'
import { LoginForm } from '@/components/auth/LoginForm'
import { MainLayout } from '@/components/layout/MainLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  const { user, isLoading } = useAuth()
  const { getLocalizedPath, getStrings } = useLocalizedStrings()
  const strings = getStrings()
  const navigationStrings = strings.navigation
  const commonStrings = strings.common

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">{commonStrings.loading}</div>
      </div>
    )
  }

  if (!user) {
    return <LoginForm />
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{navigationStrings.welcomeTitle}</h1>
          <p className="text-gray-600 mt-2">
            {navigationStrings.welcomeSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{navigationStrings.ticketsCardTitle}</CardTitle>
              <CardDescription>{navigationStrings.ticketsCardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={getLocalizedPath('/tickets')}>
                <Button className="w-full">{navigationStrings.viewTickets}</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{navigationStrings.assetsCardTitle}</CardTitle>
              <CardDescription>{navigationStrings.assetsCardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={getLocalizedPath('/assets')}>
                <Button className="w-full">{navigationStrings.viewAssets}</Button>
              </Link>
            </CardContent>
          </Card>

          {user.role === 'ADMIN' && (
            <Card>
              <CardHeader>
                <CardTitle>{navigationStrings.usersCardTitle}</CardTitle>
                <CardDescription>{navigationStrings.usersCardDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={getLocalizedPath('/users')}>
                  <Button className="w-full">{navigationStrings.manageUsers}</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
